class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  rescue_from ActionController::RoutingError, with: :render_404
  
  private
  
    def render_404(exception = nil)
      logger.info "Rendering 404: #{exception.message}" if exception
  
      render file: "#{Rails.root}/public/404.html", status: 404, layout: false
    end
    
    def not_found
      raise ActionController::RoutingError.new('Not Found')
    end
end
