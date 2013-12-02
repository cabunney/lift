class CreateFocus < ActiveRecord::Migration
  def change
    create_table :focus do |t|

      t.timestamps
    end
  end
end
