documents = (config) ->

  options =
    reload:    config.liveReload.enabled
    optimize:  config.isOptimize ? false
    cachebust: if process.env.NODE_ENV isnt "production" then "?b=#{(new Date()).getTime()}" else ''

  (req, res) -> res.render "documents", options

search = (config) ->

  options =
    reload:    config.liveReload.enabled
    optimize:  config.isOptimize ? false
    cachebust: if process.env.NODE_ENV isnt "production" then "?b=#{(new Date()).getTime()}" else ''

  (req, res) -> res.render "search", options

savedsearch = (config) ->

  options =
    reload:    config.liveReload.enabled
    optimize:  config.isOptimize ? false
    cachebust: if process.env.NODE_ENV isnt "production" then "?b=#{(new Date()).getTime()}" else ''

  (req, res) -> res.render "savedsearch", options


home = (config) ->

  options =
    reload:    config.liveReload.enabled
    optimize:  config.isOptimize ? false
    cachebust: if process.env.NODE_ENV isnt "production" then "?b=#{(new Date()).getTime()}" else ''

  (req, res) -> res.render "home", options

module.exports =
  index: search
  search: search
  savedsearch: savedsearch
  home: home
  documents: documents

