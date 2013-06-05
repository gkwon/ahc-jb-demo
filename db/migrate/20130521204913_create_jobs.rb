class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :area
      t.string :department
      t.integer :user_id

      t.timestamps
    end
  end
end
