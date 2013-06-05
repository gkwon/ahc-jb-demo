class Job < ActiveRecord::Base
  attr_accessible :area, :department, :description, :location, :title, :job_type, :user_id
  belongs_to :user
end
