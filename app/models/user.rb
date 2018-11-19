class User < ApplicationRecord
  has_many :insulins
  has_many :entries
end
