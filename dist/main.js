(function() {
  'use strict';
  angular.module('appirio-tech-timeline', ['ui.router', 'ngResource', 'app.constants', 'appirio-tech-messaging']);

}).call(this);

angular.module("appirio-tech-timeline").run(["$templateCache", function($templateCache) {$templateCache.put("views/timeline.html","<h1>Project Timeline</h1><hr/><ul><li ng-class=\"{ completed: vm.completed.submitted, expanded: vm.expanded.submitted }\" ng-click=\"vm.expanded.submitted = !vm.expanded.submitted\" class=\"milestone completed passed\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">0%</div><div class=\"status\">Complete</div><div class=\"day\">Day 1</div></div><div class=\"lead\"></div><div class=\"point\"></div><div class=\"lead-after\"></div><label><h4>Project Submitted</h4><time>{{ vm.completed.submitted | date }}</time></label></section><hr/></li><li ng-class=\"{ completed: vm.completed.email, passed: vm.passed.email, info: !vm.completed.email, expanded: vm.expanded.submitted }\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">6%</div><div class=\"status\">Complete</div><div class=\"day\">Day 1</div></div><div class=\"lead\"></div><div class=\"point\"><div class=\"info\">!</div></div><div class=\"lead-after\"></div><label ng-hide=\"vm.completed.email\">We sent an email to johndoe@example.com. <br /> Click the link in the email to verify your email address.</label><label ng-show=\"vm.completed.email\">Thanks! Your email is verified.</label></section><a href=\"#\" ng-hide=\"vm.completed.email\" class=\"resend\">Re-send Email</a></li><li ng-class=\"{ completed: vm.completed.coPilot, passed: vm.passed.coPilot, expanded: vm.expanded.submitted }\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">5%</div><div class=\"status\">Complete</div><div class=\"day\">Day 1</div></div><div class=\"lead\"></div><div class=\"point\"></div><div class=\"lead-after\"></div><label ng-show=\"!vm.completed.payment &amp;&amp; !vm.completed.coPilot\">Assign Co-Pilot</label><label ng-show=\"!vm.completed.payment &amp;&amp; vm.completed.coPilot\">We are choosing a Co-Pilot best suited for your project.</label><label ng-show=\"vm.completed.coPilot\">Co-Pilot Assigned<time>12:30pm April 5 2015</time></label></section><div ng-show=\"vm.completed.coPilot\" class=\"avatar-box\"><img src=\"{{ vm.avatars[vm.coPilotHandle] }}\" class=\"avatar\"/>Hi I\'m <a href=\"#\">{{ vm.coPilotHandle }}</a>. I\'ll be your project manager.</div></li><li ng-class=\"{ completed: vm.completed.quote, passed: vm.passed.quote}\" class=\"quote\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">15%</div><div class=\"status\">Complete</div><div class=\"day\">Day 1</div></div><div class=\"lead\"></div><div class=\"point\"></div><div class=\"lead-after\"></div><label ng-hide=\"vm.completed.quote\">Generate Quote</label><label ng-show=\"vm.completed.quote\"><div class=\"carat\"></div>Quote has been generated.</label></section><p ng-show=\"vm.completed.quote &amp;&amp; !vm.completed.payment\"><a href=\"#\">View quote and pay to continue.</a></p><div class=\"expandable-content\"><button type=\"button\" class=\"clean close\">x</button><ul><li><label>Cost:</label> \n$12,000</li><li><label>Time:</label> \n21 Days</li></ul><ul><li class=\"accept\"><button>Accept</button></li><li class=\"Reject\"><Button>Reject</Button></li></ul></div></li><li ng-class=\"{ completed: vm.completed.payment, passed: vm.passed .payment}\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">20%</div><div class=\"status\">Complete</div><div class=\"day\">Day 1</div></div><div class=\"lead\"></div><div class=\"point\"></div><div class=\"lead-after\"></div><label ng-hide=\"vm.completed.payment\">Add Payment Method</label><label ng-show=\"vm.completed.payment\">Payment Method Accepted.</label></section></li><li ng-class=\"{ completed: vm.completed.launched, passed: vm.passed.launched, expanded: vm.expanded.launched }\" ng-click=\"vm.expanded.launched = !vm.expanded.launched\" class=\"milestone\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">25%</div><div class=\"status\">Complete</div><div class=\"day\">Day 1</div></div><div class=\"lead\"></div><div class=\"point\"><div class=\"info\">!</div></div><div class=\"lead-after\"></div><label><h4>Project Launched</h4><time>May 5, 2015</time></label></section><hr/></li><li ng-class=\"{ completed: vm.completed.joined, passed: vm.passed.joined, expanded: vm.expanded.launched }\" class=\"joined\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">35%</div><div class=\"status\">Complete</div><div class=\"day\">Day 1</div></div><div class=\"lead\"></div><div class=\"point icon\"></div><div class=\"lead-after\"></div><label ng-hide=\"vm.completed.coPilot\">Meet others</label><label ng-show=\"vm.completed.coPilot\"><div class=\"carat\"></div><span>{{ vm.members.length }} member(s) have joined.</span></label></section><div class=\"expandable-content\"><button type=\"button\" class=\"clean close\">x</button><ul><li ng-repeat=\"member in vm.members track by $index\"><img ng-src=\"{{ vm.avatars[member.handle] }}\" class=\"avatar\"/><a>{{ member.handle }} </a>joined the project.</li></ul></div></li><li class=\"comment messages no-progress completed\"><section class=\"checkpoint\"><div class=\"point comment icon\"><button ng-click=\"vm.showMessagingWidget = true\" class=\"count clean\"><div class=\"notification\">6</div></button></div><div class=\"lead-after\"></div><label><img ng-src=\"{{ vm.avatars[member.handle] }}\" class=\"avatar\"/>Batman99 commented on project requirements</label></section></li><li class=\"notification messages no-progress completed\"><section class=\"checkpoint\"><div class=\"point icon\"><button ng-click=\"vm.showMessagingWidget = true\" class=\"count clean\"><div class=\"notification\">6</div></button></div><div class=\"lead-after\"></div><label><img ng-src=\"{{ vm.avatars[member.handle] }}\" class=\"avatar\"/>Maybe it\'s best if we stick with the current logo and Maybe it\'s best if we stick with the current logo and</label></section><ul class=\"links\"><li><button ng-click=\"vm.showMessagingWidget = true\" class=\"clean\">View</button></li><li><a ui-sref=\"messaging({id: 123})\">View full thread</a></li></ul><div ng-class=\"{active: vm.showMessagingWidget}\" class=\"expandable-content\"><button ng-click=\"vm.showMessagingWidget = false\" class=\"clean close\">x</button><messaging thread-id=\"123\" subscriber-id=\"Batman\" class=\"widget\"></messaging></div></li><li ng-class=\"{ completed: vm.completed.checkpoint1, passed: vm.passed.checkpoint1 }\" class=\"milestone\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">55%</div><div class=\"status\">Complete</div><div class=\"day\">Day 14</div></div><div class=\"lead\"></div><div class=\"point\"></div><div class=\"lead-after\"></div><label><h4>Submissions Due</h4><time>May 5, 2015</time></label></section><hr/></li><li ng-class=\"{ completed: vm.completed.submissions, passed: vm.passed.submissions }\" class=\"submissions\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">55%</div><div class=\"status\">Complete</div><div class=\"day\">Day 8</div></div><div class=\"lead\"></div><div class=\"point icon\"></div><div class=\"lead-after\"></div><label><img ng-src=\"{{ vm.avatars[member.handle] }}\" class=\"avatar\"/>Batman99 submitted files to your project.</label></section></li><li ng-class=\"{ completed: vm.completed.finalDesign, passed: vm.passed.finalDesign }\" class=\"milestone\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">70%</div><div class=\"status\">Complete</div><div class=\"day\">Day 20</div></div><div class=\"lead\"></div><div class=\"point\"></div><div class=\"lead-after\"></div><label><h4>Final Submissions Due</h4><time>May 5, 2015</time></label></section><hr/></li><li ng-class=\"{ completed: vm.completed.finalists, passed: vm.passed.finalists }\" class=\"milestone\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">50%</div><div class=\"status\">Complete</div><div class=\"day\">Day 14</div></div><div class=\"lead\"></div><div class=\"point\"></div><div class=\"lead-after\"></div><label><h4>Select Finalists</h4><time>May 5, 2015</time></label></section><hr/><a href=\"\" ng-show=\"vm.completed.finalists &amp;&amp; !vm.completed.finalistsSelected\">View submissions and select finalists</a></li><li ng-show=\"vm.completed.finalistsSelected\" ng-class=\"{ passed: vm.passed.finalistsSelected }\" class=\"no-progress completed\"><section class=\"checkpoint\"><div class=\"point\"></div><div class=\"lead-after\"></div><label>You selected 4 finalists</label></section></li><li ng-class=\"{ completed: vm.completed.winner, passed: vm.passed.winner }\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">85%</div><div class=\"status\">Complete</div><div class=\"day\">Day 20</div></div><div class=\"lead\"></div><div class=\"point\"></div><div class=\"lead-after\"></div><label>Choose Winner!</label></section></li><li ng-class=\"{ completed: vm.completed.finalFeedback, passed: vm.passed.finalFeedback }\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">95%</div><div class=\"status\">Complete</div><div class=\"day\">Day 20</div></div><div class=\"lead\"></div><div class=\"point\"></div><div class=\"lead-after\"></div><label ng-hide=\"vm.completed.finalFeedback\">Final Feedback</label><label ng-show=\"vm.completed.finalFeedback\">Feedback given to <a href=\"#\">{{ vm.feedback2Handle }}</a></label></section><p ng-show=\"vm.completed.finalFeedback &amp;&amp; !vm.completed.complete\">Awaiting final design changes.</p></li><li ng-class=\"{ completed: vm.completed.completed, passed: vm.passed.completed }\" class=\"milestone\"><section class=\"checkpoint\"><div class=\"progress\"><div class=\"percent\">100%</div><div class=\"status\">Complete</div><div class=\"day\">Day 20</div></div><div class=\"lead\"></div><div class=\"point\"></div><div class=\"lead-after\"></div><label><h4>Project Complete</h4><time>May 5, 2015</time></label></section><hr/></li></ul>");}]);
(function() {
  'use strict';
  var TimelineController;

  TimelineController = function(TimelineService, $stateParams) {
    var activate, mapEvents, onChange, setStatus, vm;
    vm = this;
    vm.coPilotHandle = null;
    vm.members = [];
    vm.avatars = {};
    vm.submissions = null;
    vm.feedbackHandle = null;
    vm.feedback2Handle = null;
    vm.showMessagingWidget = false;
    vm.completed = {};
    vm.passed = {};
    vm.expanded = {
      submitted: false,
      launched: false,
      submissions: false,
      finalSubmissions: false,
      chooseWinner: false
    };
    mapEvents = [
      {
        key: 'submitted',
        value: 'submitted'
      }, {
        key: 'email',
        value: 'email-verified'
      }, {
        key: 'quote',
        value: 'quote-created'
      }, {
        key: 'payment',
        value: 'payment-accepted'
      }, {
        key: 'coPilot',
        value: 'copilot-assigned'
      }, {
        key: 'launched',
        value: 'launched'
      }, {
        key: 'joined',
        value: 'challenge-member-registered'
      }, {
        key: 'submissions',
        value: 'challenge-submission'
      }, {
        key: 'feedback',
        value: 'challenge-feedback-provided'
      }, {
        key: 'checkpoint1',
        value: 'checkpoint1'
      }, {
        key: 'finalists',
        value: 'finalists'
      }, {
        key: 'finalistsSelected',
        value: 'challenge-finalists-selected'
      }, {
        key: 'finalDesign',
        value: 'final-design'
      }, {
        key: 'winner',
        value: 'winner'
      }, {
        key: 'finalFeedback',
        value: 'final-feedback'
      }, {
        key: 'completed',
        value: 'completed'
      }
    ];
    activate = function() {
      var j, len, mapEvent, params;
      for (j = 0, len = mapEvents.length; j < len; j++) {
        mapEvent = mapEvents[j];
        vm[mapEvent.key] = {
          passed: false,
          completed: false
        };
      }
      params = {
        workId: $stateParams.workId
      };
      TimelineService.getEvents(params, onChange);
      return vm;
    };
    onChange = function(timeline) {
      setStatus(timeline);
      vm.coPilotHandle = timeline.coPilot;
      vm.members = timeline.members;
      vm.avatars = timeline.avatars;
      vm.submissions = timeline.submissions;
      vm.feedbackHandle = timeline.feedback;
      return vm.feedback2Handle = timeline.feedback2;
    };
    setStatus = function(timeline) {
      var i, j, k, len, len1, mapEvent, ref, results;
      for (j = 0, len = mapEvents.length; j < len; j++) {
        mapEvent = mapEvents[j];
        vm.completed[mapEvent.key] = (ref = timeline.createdDates) != null ? ref[mapEvent.value] : void 0;
      }
      results = [];
      for (i = k = 0, len1 = mapEvents.length; k < len1; i = ++k) {
        mapEvent = mapEvents[i];
        if (mapEvents[i + 1]) {
          results.push(vm.passed[mapEvent.key] = vm[mapEvents[i + 1].key].completed);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    return activate();
  };

  TimelineController.$inject = ['TimelineService', '$stateParams'];

  angular.module('appirio-tech-timeline').controller('TimelineController', TimelineController);

}).call(this);

(function() {
  'use strict';
  var eventTypes, srv;

  eventTypes = ['copilot-assigned', 'created', 'submitted', 'quote-created', 'email-verified', 'payment-accepted', 'challenge-feedback-provided', 'challenge-submission', 'challenge-member-registered', 'challenge-finalists-selected', 'state-change', 'launched', 'checkpoint1', 'finalists', 'final-design', 'winner', 'final-feedback', 'completed'];

  srv = function(TimelineAPIService, UserAPIService, AVATAR_URL, SUBMISSION_URL) {
    var buildAvatar, buildTimeline, findAllEvents, findEvent, getCreatedAt, getEvents, getHandle, getMembers, getSubmissions;
    buildTimeline = function(events, onChange) {
      var coPilot, createdDates, eventType, feedback, feedback2, i, j, len, len1, member, members, submissions, timeline;
      createdDates = {};
      coPilot = getHandle(events, 'copilot-assigned');
      submissions = getSubmissions(events);
      feedback = getHandle(events, 'challenge-feedback-provided');
      feedback2 = getHandle(events, 'final-feedback');
      members = getMembers(events);
      for (i = 0, len = eventTypes.length; i < len; i++) {
        eventType = eventTypes[i];
        createdDates[eventType] = getCreatedAt(eventType, events);
      }
      timeline = {
        events: events,
        createdDates: createdDates,
        coPilot: coPilot,
        members: members,
        avatars: {},
        submissions: submissions,
        feedback: feedback,
        feedback2: feedback2
      };
      if (coPilot) {
        buildAvatar(timeline, coPilot, onChange);
      }
      for (j = 0, len1 = members.length; j < len1; j++) {
        member = members[j];
        buildAvatar(timeline, member.handle, onChange);
      }
      return typeof onChange === "function" ? onChange(timeline) : void 0;
    };
    buildAvatar = function(timeline, handle, onChange) {
      var user, userParams;
      if (!timeline.avatars[handle]) {
        userParams = {
          handle: handle
        };
        user = UserAPIService.get(userParams);
        user.$promise.then(function(response) {
          timeline.avatars[handle] = AVATAR_URL + (response != null ? response.photoLink : void 0);
          return typeof onChange === "function" ? onChange(timeline) : void 0;
        });
        user.$promise["catch"](function() {});
        return user.$promise["finally"](function() {});
      }
    };
    getEvents = function(params, onChange) {
      var queryParams, resource;
      queryParams = {
        filter: 'sourceObjectId=' + params.workId
      };
      resource = TimelineAPIService.query(queryParams);
      resource.$promise.then(function(response) {
        return buildTimeline(response, onChange);
      });
      resource.$promise["catch"](function() {});
      return resource.$promise["finally"](function() {});
    };
    getSubmissions = function(events) {
      var i, len, ref, ref1, submission, submissionEvent, submissionEvents, submissions;
      submissions = [];
      submissionEvents = findAllEvents('challenge-submission', events);
      for (i = 0, len = submissionEvents.length; i < len; i++) {
        submissionEvent = submissionEvents[i];
        submission = {
          handle: submissionEvent != null ? (ref = submissionEvent.sourceObjectContent) != null ? ref.handle : void 0 : void 0,
          url: SUBMISSION_URL + '/?module=DownloadSubmission&sbmid='
        };
        submission.url += submissionEvent != null ? (ref1 = submissionEvent.sourceObjectContent) != null ? ref1.submissionId : void 0 : void 0;
        submissions.push(submission);
      }
      return submissions;
    };
    findEvent = function(type, events) {
      var e, i, len;
      for (i = 0, len = events.length; i < len; i++) {
        e = events[i];
        if (e.eventSubType === type) {
          return e;
        }
      }
      return false;
    };
    findAllEvents = function(type, events) {
      var e, foundEvents, i, len;
      foundEvents = [];
      for (i = 0, len = events.length; i < len; i++) {
        e = events[i];
        if (e.eventSubType === type) {
          foundEvents.push(e);
        }
      }
      return foundEvents;
    };
    getHandle = function(events, type) {
      var event, ref;
      event = findEvent(type, events);
      return event != null ? (ref = event.sourceObjectContent) != null ? ref.handle : void 0 : void 0;
    };
    getMembers = function(events) {
      var i, len, memberEvent, memberEvents, members, ref;
      members = [];
      memberEvents = findAllEvents('challenge-member-registered', events);
      for (i = 0, len = memberEvents.length; i < len; i++) {
        memberEvent = memberEvents[i];
        members.push({
          handle: memberEvent != null ? (ref = memberEvent.sourceObjectContent) != null ? ref.handle : void 0 : void 0,
          joined: memberEvent != null ? memberEvent.createdAt : void 0
        });
      }
      return members;
    };
    getCreatedAt = function(type, events) {
      var e;
      e = findEvent(type, events);
      return e != null ? e.createdAt : void 0;
    };
    return {
      getEvents: getEvents
    };
  };

  srv.$inject = ['TimelineAPIService', 'UserAPIService', 'AVATAR_URL', 'SUBMISSION_URL'];

  angular.module('appirio-tech-timeline').factory('TimelineService', srv);

}).call(this);

(function() {
  'use strict';
  var srv, transformResponse;

  transformResponse = function(response) {
    var parsed, ref;
    parsed = JSON.parse(response);
    return (parsed != null ? (ref = parsed.result) != null ? ref.content : void 0 : void 0) || [];
  };

  srv = function($resource, API_URL) {
    var actions, params, url;
    url = API_URL + '/events';
    params = {
      filter: 'sourceObjectId%3D@workId'
    };
    actions = {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: transformResponse
      }
    };
    return $resource(url, params, actions);
  };

  srv.$inject = ['$resource', 'API_URL'];

  angular.module('appirio-tech-timeline').factory('TimelineAPIService', srv);

}).call(this);

(function() {
  'use strict';
  var srv;

  srv = function($resource, API_URL_V2) {
    var params, url;
    url = API_URL_V2 + '/users/:handle';
    params = {
      handle: '@handle'
    };
    return $resource(url, params);
  };

  srv.$inject = ['$resource', 'API_URL_V2'];

  angular.module('appirio-tech-timeline').factory('UserAPIService', srv);

}).call(this);
