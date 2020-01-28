class Item
  include ActiveModel::Model
  
  attr_accessor :name, :slug, :gltf, :description
end