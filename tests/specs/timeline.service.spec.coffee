'use strict'

timeline  = null

describe 'TimelineService', ->
  beforeEach inject (TimelineService, $httpBackend) ->
    params =
      workId: 123

    TimelineService.getEvents params, (response) ->
      timeline = response

    $httpBackend.flush()

  it 'should have an array of events', ->
    expect(timeline.events.length).to.be.ok

  it 'should have created dates for completed', ->
    expect(timeline.createdDates.completed).to.be.equal '2015-05-05T20:53:41.467Z'