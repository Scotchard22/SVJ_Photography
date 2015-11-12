Rails.application.routes.draw do
  root 'static_pages#home'

  get '/justin', to: 'static_pages#justin', as: 'justin'
  get '/vlad', to: 'static_pages#vlad', as: 'vlad'
  get '/scot', to: 'static_pages#scot', as: 'scot'
  get '/gallery', to: 'static_pages#gallery', as: 'gallery'
  get '/contact', to: 'static_pages#contact', as: 'contact'
end  