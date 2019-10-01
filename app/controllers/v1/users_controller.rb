class V1::UsersController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'something',
        :guid => "gfjnjgnfdnj"
      }
      ] }.to_json
  end
end
