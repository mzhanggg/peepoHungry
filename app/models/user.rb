# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  zipcode         :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string           not null
#  session_token   :string           not null
#
class User < ApplicationRecord
  validates :fname, :lname, :email, :zipcode, :session_token, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :email,:session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token
  
  has_secure_password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    
    if user&.authenticate(password) 
      return user
    else
      nil 
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    save!
    self.session_token
  end

  private

  def generate_unique_session_token
    while true
      token = SecureRandom.urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end

end
