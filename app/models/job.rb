class Job < ActiveRecord::Base
  attr_accessible :area, :department, :description, :location, :title, :user_id
  belongs_to :user
end
