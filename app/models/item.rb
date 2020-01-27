class Item
  include ActiveModel::Model
  
  attr_accessor :name, :slug, :gltf, :title, :description
end