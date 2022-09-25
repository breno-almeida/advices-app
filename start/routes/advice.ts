import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('advice', 'AdviceController').apiOnly()
})
