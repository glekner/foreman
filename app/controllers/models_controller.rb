class ModelsController < ReactController
  include Foreman::Controller::AutoCompleteSearch
  include Foreman::Controller::Parameters::Model

  before_action :find_resource, :only => [:edit, :update, :destroy]

  # def index
  #   respond_to do |format|
  #     format.html
  #     format.json do
  #       @models = resource_base_search_and_page
  #       render :json => {
  #         :models => @models,
  #         :itemCount => @models.count
  #       }
  #     end
  #   end
  # end

  def new
    @model = Model.new
  end

  def create
    @model = Model.new(model_params)
    if @model.save
      process_success
    else
      process_error
    end
  end

  def edit
  end

  def update
    if @model.update(model_params)
      process_success
    else
      process_error
    end
  end

  def destroy
    if @model.destroy
      process_success
    else
      process_error
    end
  end
end
