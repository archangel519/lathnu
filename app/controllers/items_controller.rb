class ItemsController < ApplicationController
  before_action :set_item, only: [:show]
    
  def show
  end
  
  private
  
    def set_item
      items = [
        Item.new(name: 'Amulet', slug: 'amulet', gltf: 'scene.gltf', position: '0 0 0', scale: '.03 .03 .03', rotation: '0 0 230', description: 'The Amulet of Vigor has mysterious powers.'),
        Item.new(name: 'Aether Sword', slug: 'aether-sword', gltf: 'scene.gltf', position: '.8 .2 -.2', scale: '.045 .045 .045', rotation: '0 130 0', description: 'A unique sword powered by aether.')
      ]
      @item = items.detect { |c| c.slug == params[:slug]}
      raise ActionController::RoutingError.new('Not Found') unless @item.present?
    end
end
