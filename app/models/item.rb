class Item
  include ActiveModel::Model
  
  attr_accessor :name, :slug, :gltf, :scale, :position, :rotation, :description
end