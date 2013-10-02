require({
  urlArgs: "b=" + ((new Date()).getTime()),
  paths: {
    jquery: 'vendor/jquery',
    f: 'vendor/foundation'
  },
  shim: {
    "vendor/foundation/foundation": ["jquery"]
  }
}, ["jquery", "vendor/foundation/foundation"], function($) {
  return requirejs(["f/foundation.alerts", "f/foundation.clearing", "f/foundation.cookie", "f/foundation.dropdown", "f/foundation.forms", "f/foundation.interchange", "f/foundation.joyride", "f/foundation.magellan", "f/foundation.orbit", "f/foundation.placeholder", "f/foundation.reveal", "f/foundation.section", "f/foundation.tooltips", "f/foundation.topbar"], function() {
    var $doc;
    $doc = $(document);
    if ($.fn.foundationAlerts) {
      $doc.foundationAlerts();
    } else {
      null;
    }
    if ($.fn.foundationButtons) {
      $doc.foundationButtons();
    } else {
      null;
    }
    if ($.fn.foundationAccordion) {
      $doc.foundationAccordion();
    } else {
      null;
    }
    if ($.fn.foundationNavigation) {
      $doc.foundationNavigation();
    } else {
      null;
    }
    if ($.fn.foundationTopBar) {
      $doc.foundationTopBar();
    } else {
      null;
    }
    if ($.fn.foundationCustomForms) {
      $doc.foundationCustomForms();
    } else {
      null;
    }
    if ($.fn.foundationMediaQueryViewer) {
      $doc.foundationMediaQueryViewer();
    } else {
      null;
    }
    if ($.fn.foundationTabs) {
      $doc.foundationTabs({
        callback: $.foundation.customForms.appendCustomMarkup
      });
    } else {
      null;
    }
    if ($.fn.foundationTooltips) {
      $doc.foundationTooltips();
    } else {
      null;
    }
    if ($.fn.foundationMagellan) {
      $doc.foundationMagellan();
    } else {
      null;
    }
    if ($.fn.foundationClearing) {
      $doc.foundationClearing();
    } else {
      null;
    }
    if ($.fn.placeholder) {
      $('input, textarea').placeholder();
    } else {
      null;
    }
    $doc.foundation();
    $("dl.sub-nav.active_menu dd").click(function() {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
      $(".news_feed").hide();
      return $(".news_feed").fadeIn("fast");
    });
    $(".filter_keyword a.search").click(function() {
      $(".news_feed").hide();
      return $(".news_feed").fadeIn("fast");
    });
    $(".actions, .filters_container aside, section.geo_view, .results_container, .search_results").hide();
    $("article .small-1").append("<label for='checkbox1'><input id='checkbox1' type='checkbox' style='display: none;' class='hidden-field'><span class='custom checkbox'> </span></label>");
    $("label.checkall.all").click(function() {
      var offset;
      $("article span.custom").addClass("checked");
      offset = $(this).offset();
      $(".filters_container aside").fadeIn("fast");
      return $(".filters_container aside").offset({
        top: offset.top,
        left: offset.left
      });
    });
    $("label.checkall.none").click(function() {
      return $("article span.custom").removeClass("checked");
    });
    $("form .row article label").click(function() {
      var offset;
      offset = $(this).offset();
      $(".filters_container aside").fadeIn("fast");
      return $(".filters_container aside").offset({
        top: offset.top,
        left: offset.left
      });
    });
    $(".filters_container aside ul li").click(function() {
      return $(".filters_container aside").fadeOut("fast");
    });
    $(".entry").mouseenter(function() {
      $(this).append("<div class='actions' style='display:none'><ul><li> <a href='#'></a></li><li> <a href='#'></a></li><li> <a href='#'></a></li><li> <a href='#'></a></li><li> <a href='#'></a></li></ul></div>");
      return $(this).children(".actions").show();
    });
    $(".entry").mouseleave(function() {
      $(this).children(".actions").hide();
      return $(this).children(".actions").remove();
    });
    $(".coachmark h2").click(function() {
      $("div.coachmark").hide();
      $("form input[type='text']").focus();
      return $("form input[type='text']").val("");
    });
    $(document).keydown(function() {
      $("div.coachmark").hide();
      return $("form input[type='text']").focus();
    });
    $("input[type='text'].filter").click(function() {
      return $(this).val("");
    });
    $("form .button.search").click(function() {
      return $(".search_results").fadeIn();
    });
    $("form.custom").submit(function() {
      $(".search_results").fadeIn();
      return false;
    });
    $(".filters_container aside").mouseleave(function() {
      return $(".filters_container aside").hide();
    });
    $("a.geo_view").click(function() {
      $("section.geo_view").fadeIn();
      $("section.search_results, section.savedsearch_results").hide();
      return $("form.custom fieldset").hide();
    });
    $(".close_map").click(function() {
      $("section.geo_view").hide();
      $("section.search_results, section.savedsearch_results").fadeIn();
      return $("form.custom fieldset").show();
    });
    $(".list_results").click(function() {
      $(this).toggleClass("results_opened");
      return $(".results_container").animate({
        width: "toggle"
      });
    });
    $("section.documents_results .content p.title").click(function() {
      return window.location.href = "/savedsearch";
    });
    return $(".accordion").on("click", "section", function(event) {
      $("section.active").find(".content").slideToggle("slow");
      return $(this).find(".content").slideToggle("slow");
    });
  });
});

//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2x1aXMvZGF0YW1hY2hlMi9kYXRhbWFjaGUyL3VpL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2x1aXMvZGF0YW1hY2hlMi9kYXRhbWFjaGUyL3VpL2Fzc2V0cy9qYXZhc2NyaXB0cy9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUNFLE1BREY7Q0FDRSxDQUFBLENBQWEsQ0FBSCxHQUFWO0NBQUEsQ0FDQSxHQUFBO0NBQ0UsQ0FBUSxFQUFSLEVBQUEsU0FBQTtDQUFBLENBQ1EsRUFBUixlQURBO0lBRkY7Q0FBQSxDQUlBLEVBQUE7Q0FDRSxDQUFnQyxFQUFoQyxJQUFnQyxzQkFBaEM7SUFMRjtDQU1HLENBUEwsQ0FRSSxLQURBLENBQ0MscUJBREQ7Q0FHVSxDQUVSLENBWXdCLE1BZDFCLFdBQVUsQ0FBQSxDQUFBLENBQUEsR0FBQTtDQWdCUixHQUFBLElBQUE7Q0FBQSxFQUFPLENBQVAsSUFBTztDQUNQLENBQU8sRUFBUCxZQUFBO0NBQThCLEdBQUksRUFBSixVQUFBO01BQTlCO0NBQTJELEdBQUEsRUFBQTtNQUQzRDtDQUVBLENBQU8sRUFBUCxhQUFBO0NBQStCLEdBQUksRUFBSixXQUFBO01BQS9CO0NBQTZELEdBQUEsRUFBQTtNQUY3RDtDQUdBLENBQU8sRUFBUCxlQUFBO0NBQWlDLEdBQUksRUFBSixhQUFBO01BQWpDO0NBQWlFLEdBQUEsRUFBQTtNQUhqRTtDQUlBLENBQU8sRUFBUCxnQkFBQTtDQUFrQyxHQUFJLEVBQUosY0FBQTtNQUFsQztDQUFtRSxHQUFBLEVBQUE7TUFKbkU7Q0FLQSxDQUFPLEVBQVAsWUFBQTtDQUE4QixHQUFJLEVBQUosVUFBQTtNQUE5QjtDQUEyRCxHQUFBLEVBQUE7TUFMM0Q7Q0FNQSxDQUFPLEVBQVAsaUJBQUE7Q0FBbUMsR0FBSSxFQUFKLGVBQUE7TUFBbkM7Q0FBcUUsR0FBQSxFQUFBO01BTnJFO0NBT0EsQ0FBTyxFQUFQLHNCQUFBO0NBQXdDLEdBQUksRUFBSixvQkFBQTtNQUF4QztDQUErRSxHQUFBLEVBQUE7TUFQL0U7Q0FRQSxDQUFPLEVBQVAsVUFBQTtDQUE0QixHQUFJLEVBQUosUUFBQTtDQUFvQixDQUFZLE1BQVgsRUFBdUIsQ0FBWSxPQUFwQztDQUFwQixPQUFBO01BQTVCO0NBQStHLEdBQUEsRUFBQTtNQVIvRztDQVNBLENBQU8sRUFBUCxjQUFBO0NBQWdDLEdBQUksRUFBSixZQUFBO01BQWhDO0NBQStELEdBQUEsRUFBQTtNQVQvRDtDQVVBLENBQU8sRUFBUCxjQUFBO0NBQWdDLEdBQUksRUFBSixZQUFBO01BQWhDO0NBQStELEdBQUEsRUFBQTtNQVYvRDtDQVdBLENBQU8sRUFBUCxjQUFBO0NBQWdDLEdBQUksRUFBSixZQUFBO01BQWhDO0NBQStELEdBQUEsRUFBQTtNQVgvRDtDQVlBLENBQU8sRUFBUCxPQUFBO0NBQXlCLEtBQUEsS0FBQSxNQUFBO01BQXpCO0NBQWlFLEdBQUEsRUFBQTtNQVpqRTtDQUFBLEdBY0EsTUFBQTtDQWRBLEVBZ0JxQyxDQUFyQyxDQUFBLElBQXFDLGtCQUFyQztDQUNFLEdBQUEsRUFBQSxFQUFBLEdBQUE7Q0FBQSxHQUNBLEVBQUEsRUFBQTtDQURBLEdBRUEsRUFBQSxNQUFBO0NBQ0EsS0FBQSxNQUFBLENBQUE7Q0FKRixJQUFxQztDQWhCckMsRUFzQm9DLENBQXBDLENBQUEsSUFBb0MsaUJBQXBDO0NBQ0UsR0FBQSxFQUFBLE1BQUE7Q0FDQSxLQUFBLE1BQUEsQ0FBQTtDQUZGLElBQW9DO0NBdEJwQyxHQTBCQSx1RkFBQTtDQTFCQSxHQTZCQSxFQUFBLFlBQUEsdUlBQUE7Q0E3QkEsRUFnQzhCLENBQTlCLENBQUEsSUFBOEIsV0FBOUI7Q0FDRSxLQUFBLElBQUE7Q0FBQSxLQUFBLEVBQUEsQ0FBQSxZQUFBO0NBQUEsRUFDUyxDQUFBLEVBQVQ7Q0FEQSxLQUVBLG9CQUFBO0NBQ0EsS0FBQSxPQUFBLGFBQUE7Q0FDRSxDQUFLLENBQUwsR0FBVyxFQUFYO0NBQUEsQ0FDTSxFQUFOLEVBQVksRUFBWjtDQU4wQixPQUk1QjtDQUpGLElBQThCO0NBaEM5QixFQXdDK0IsQ0FBL0IsQ0FBQSxJQUErQixZQUEvQjtDQUNFLFFBQUEsRUFBQSxFQUFBLFFBQUE7Q0FERixJQUErQjtDQXhDL0IsRUEyQ21DLENBQW5DLENBQUEsSUFBbUMsZ0JBQW5DO0NBQ0UsS0FBQSxJQUFBO0NBQUEsRUFBUyxDQUFBLEVBQVQ7Q0FBQSxLQUNBLG9CQUFBO0NBQ0EsS0FBQSxPQUFBLGFBQUE7Q0FDRSxDQUFLLENBQUwsR0FBVyxFQUFYO0NBQUEsQ0FDTSxFQUFOLEVBQVksRUFBWjtDQUwrQixPQUdqQztDQUhGLElBQW1DO0NBM0NuQyxFQWtEMEMsQ0FBMUMsQ0FBQSxJQUEwQyx1QkFBMUM7Q0FDRSxLQUFBLENBQUEsTUFBQSxhQUFBO0NBREYsSUFBMEM7Q0FsRDFDLEVBdUR1QixDQUF2QixJQUFBLENBQXVCLENBQXZCO0NBQ0MsR0FBQSxFQUFBLHVMQUFBO0NBQ0EsR0FBQSxJQUFBLEVBQUEsR0FBQTtDQUZELElBQXVCO0NBdkR2QixFQTJEdUIsQ0FBdkIsSUFBQSxDQUF1QixDQUF2QjtDQUNDLEdBQUEsRUFBQSxFQUFBLEVBQUE7Q0FDQSxHQUFBLEVBQUEsRUFBQSxFQUFBLEdBQUE7Q0FGRCxJQUF1QjtDQTNEdkIsRUFrRXlCLENBQXpCLENBQUEsSUFBeUIsTUFBekI7Q0FDRSxHQUFBLEVBQUEsU0FBQTtDQUFBLElBQ0EsQ0FBQSxtQkFBQTtDQUNBLENBQUEsQ0FBQSxVQUFBLFlBQUE7Q0FIRixJQUF5QjtDQWxFekIsRUF1RW9CLENBQXBCLEdBQUEsQ0FBQSxDQUFvQjtDQUNsQixHQUFBLEVBQUEsU0FBQTtDQUNBLElBQUEsUUFBQSxZQUFBO0NBRkYsSUFBb0I7Q0F2RXBCLEVBMkVxQyxDQUFyQyxDQUFBLElBQXFDLGtCQUFyQztDQUNFLENBQUEsQ0FBQSxDQUFBLFNBQUE7Q0FERixJQUFxQztDQTNFckMsRUFpRitCLENBQS9CLENBQUEsSUFBK0IsWUFBL0I7Q0FDRSxLQUFBLE9BQUEsSUFBQTtDQURGLElBQStCO0NBakYvQixFQW9Gd0IsQ0FBeEIsRUFBQSxHQUF3QixJQUF4QjtDQUNFLEtBQUEsV0FBQTtDQURzQixZQUV0QjtDQUZGLElBQXdCO0NBcEZ4QixFQTBGeUMsQ0FBekMsS0FBeUMsQ0FBekMsZ0JBQUE7Q0FDRSxHQUFBLFNBQUEsYUFBQTtDQURGLElBQXlDO0NBMUZ6QyxFQWdHc0IsQ0FBdEIsQ0FBQSxJQUFzQixHQUF0QjtDQUNFLEtBQUEsWUFBQTtDQUFBLEdBQ0EsRUFBQSwrQ0FBQTtDQUNBLEdBQUEsU0FBQSxTQUFBO0NBSEYsSUFBc0I7Q0FoR3RCLEVBcUdzQixDQUF0QixDQUFBLElBQXNCLEdBQXRCO0NBQ0UsR0FBQSxFQUFBLFlBQUE7Q0FBQSxLQUNBLCtDQUFBO0NBQ0EsR0FBQSxTQUFBLFNBQUE7Q0FIRixJQUFzQjtDQXJHdEIsRUEwR3lCLENBQXpCLENBQUEsSUFBeUIsTUFBekI7Q0FDRSxHQUFBLEVBQUEsS0FBQSxLQUFBO0NBRUEsTUFBQSxNQUFBLE9BQUE7Q0FBZ0MsQ0FBTyxHQUFQLEdBQUE7Q0FIVCxPQUd2QjtDQUhGLElBQXlCO0NBMUd6QixFQWlIc0QsQ0FBdEQsQ0FBQSxJQUFzRCxtQ0FBdEQ7Q0FDUyxFQUFnQixDQUF2QixFQUFNLEVBQVMsS0FBZjtDQURGLElBQXNEO0NBSXRELENBQUEsQ0FBdUMsRUFBQSxFQUF2QyxFQUFBLEVBQUEsQ0FBQTtDQUNFLEdBQUEsRUFBQSxJQUFBLENBQUEsS0FBQTtDQUNBLEdBQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtDQUZGLElBQXVDO0NBckl6QyxFQWMwQjtDQWhCMUIiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlXG4gIHVybEFyZ3M6IFwiYj0jeyhuZXcgRGF0ZSgpKS5nZXRUaW1lKCl9XCJcbiAgcGF0aHM6XG4gICAganF1ZXJ5OiAndmVuZG9yL2pxdWVyeSdcbiAgICBmOiAgICAgICd2ZW5kb3IvZm91bmRhdGlvbidcbiAgc2hpbTpcbiAgICBcInZlbmRvci9mb3VuZGF0aW9uL2ZvdW5kYXRpb25cIjogW1wianF1ZXJ5XCJdXG4gICwgW1wianF1ZXJ5XCIsIFwidmVuZG9yL2ZvdW5kYXRpb24vZm91bmRhdGlvblwiXVxuICAsICgkKSAtPlxuXG4gICAgcmVxdWlyZWpzIFtcbiAgICAgIFwiZi9mb3VuZGF0aW9uLmFsZXJ0c1wiXG4gICAgICBcImYvZm91bmRhdGlvbi5jbGVhcmluZ1wiXG4gICAgICBcImYvZm91bmRhdGlvbi5jb29raWVcIlxuICAgICAgXCJmL2ZvdW5kYXRpb24uZHJvcGRvd25cIlxuICAgICAgXCJmL2ZvdW5kYXRpb24uZm9ybXNcIlxuICAgICAgXCJmL2ZvdW5kYXRpb24uaW50ZXJjaGFuZ2VcIlxuICAgICAgXCJmL2ZvdW5kYXRpb24uam95cmlkZVwiXG4gICAgICBcImYvZm91bmRhdGlvbi5tYWdlbGxhblwiXG4gICAgICBcImYvZm91bmRhdGlvbi5vcmJpdFwiXG4gICAgICBcImYvZm91bmRhdGlvbi5wbGFjZWhvbGRlclwiXG4gICAgICBcImYvZm91bmRhdGlvbi5yZXZlYWxcIlxuICAgICAgXCJmL2ZvdW5kYXRpb24uc2VjdGlvblwiXG4gICAgICBcImYvZm91bmRhdGlvbi50b29sdGlwc1wiXG4gICAgICBcImYvZm91bmRhdGlvbi50b3BiYXJcIl0sIC0+XG5cbiAgICAgICRkb2MgPSAkKGRvY3VtZW50KVxuICAgICAgaWYgJC5mbi5mb3VuZGF0aW9uQWxlcnRzIHRoZW4gJGRvYy5mb3VuZGF0aW9uQWxlcnRzKCkgZWxzZSBudWxsXG4gICAgICBpZiAkLmZuLmZvdW5kYXRpb25CdXR0b25zIHRoZW4gJGRvYy5mb3VuZGF0aW9uQnV0dG9ucygpIGVsc2UgbnVsbFxuICAgICAgaWYgJC5mbi5mb3VuZGF0aW9uQWNjb3JkaW9uIHRoZW4gJGRvYy5mb3VuZGF0aW9uQWNjb3JkaW9uKCkgZWxzZSBudWxsXG4gICAgICBpZiAkLmZuLmZvdW5kYXRpb25OYXZpZ2F0aW9uIHRoZW4gJGRvYy5mb3VuZGF0aW9uTmF2aWdhdGlvbigpIGVsc2UgbnVsbFxuICAgICAgaWYgJC5mbi5mb3VuZGF0aW9uVG9wQmFyIHRoZW4gJGRvYy5mb3VuZGF0aW9uVG9wQmFyKCkgZWxzZSBudWxsXG4gICAgICBpZiAkLmZuLmZvdW5kYXRpb25DdXN0b21Gb3JtcyB0aGVuICRkb2MuZm91bmRhdGlvbkN1c3RvbUZvcm1zKCkgZWxzZSBudWxsXG4gICAgICBpZiAkLmZuLmZvdW5kYXRpb25NZWRpYVF1ZXJ5Vmlld2VyIHRoZW4gJGRvYy5mb3VuZGF0aW9uTWVkaWFRdWVyeVZpZXdlcigpIGVsc2UgbnVsbFxuICAgICAgaWYgJC5mbi5mb3VuZGF0aW9uVGFicyB0aGVuICRkb2MuZm91bmRhdGlvblRhYnMoe2NhbGxiYWNrIDogJC5mb3VuZGF0aW9uLmN1c3RvbUZvcm1zLmFwcGVuZEN1c3RvbU1hcmt1cH0pIGVsc2UgbnVsbFxuICAgICAgaWYgJC5mbi5mb3VuZGF0aW9uVG9vbHRpcHMgdGhlbiAkZG9jLmZvdW5kYXRpb25Ub29sdGlwcygpIGVsc2UgbnVsbFxuICAgICAgaWYgJC5mbi5mb3VuZGF0aW9uTWFnZWxsYW4gdGhlbiAkZG9jLmZvdW5kYXRpb25NYWdlbGxhbigpIGVsc2UgbnVsbFxuICAgICAgaWYgJC5mbi5mb3VuZGF0aW9uQ2xlYXJpbmcgdGhlbiAkZG9jLmZvdW5kYXRpb25DbGVhcmluZygpIGVsc2UgbnVsbFxuICAgICAgaWYgJC5mbi5wbGFjZWhvbGRlciB0aGVuICQoJ2lucHV0LCB0ZXh0YXJlYScpLnBsYWNlaG9sZGVyKCkgZWxzZSBudWxsXG5cbiAgICAgICRkb2MuZm91bmRhdGlvbigpXG5cbiAgICAgICQoXCJkbC5zdWItbmF2LmFjdGl2ZV9tZW51IGRkXCIpLmNsaWNrIC0+XG4gICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcyBcImFjdGl2ZVwiXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MgXCJhY3RpdmVcIlxuICAgICAgICAkKFwiLm5ld3NfZmVlZFwiKS5oaWRlKClcbiAgICAgICAgJChcIi5uZXdzX2ZlZWRcIikuZmFkZUluKFwiZmFzdFwiKVxuXG4gICAgICAkKFwiLmZpbHRlcl9rZXl3b3JkIGEuc2VhcmNoXCIpLmNsaWNrIC0+XG4gICAgICAgICQoXCIubmV3c19mZWVkXCIpLmhpZGUoKVxuICAgICAgICAkKFwiLm5ld3NfZmVlZFwiKS5mYWRlSW4oXCJmYXN0XCIpXG5cbiAgICAgICQoXCIuYWN0aW9ucywgLmZpbHRlcnNfY29udGFpbmVyIGFzaWRlLCBzZWN0aW9uLmdlb192aWV3LCAucmVzdWx0c19jb250YWluZXIsIC5zZWFyY2hfcmVzdWx0c1wiKS5oaWRlKClcblxuXG4gICAgICAkKFwiYXJ0aWNsZSAuc21hbGwtMVwiKS5hcHBlbmQoXCI8bGFiZWwgZm9yPSdjaGVja2JveDEnPjxpbnB1dCBpZD0nY2hlY2tib3gxJyB0eXBlPSdjaGVja2JveCcgc3R5bGU9J2Rpc3BsYXk6IG5vbmU7JyBjbGFzcz0naGlkZGVuLWZpZWxkJz48c3BhbiBjbGFzcz0nY3VzdG9tIGNoZWNrYm94Jz4gPC9zcGFuPjwvbGFiZWw+XCIpXG5cblxuICAgICAgJChcImxhYmVsLmNoZWNrYWxsLmFsbFwiKS5jbGljayAtPlxuICAgICAgICAkKFwiYXJ0aWNsZSBzcGFuLmN1c3RvbVwiKS5hZGRDbGFzcyBcImNoZWNrZWRcIlxuICAgICAgICBvZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpXG4gICAgICAgICQoXCIuZmlsdGVyc19jb250YWluZXIgYXNpZGVcIikuZmFkZUluKFwiZmFzdFwiKVxuICAgICAgICAkKFwiLmZpbHRlcnNfY29udGFpbmVyIGFzaWRlXCIpLm9mZnNldFxuICAgICAgICAgIHRvcDogb2Zmc2V0LnRvcFxuICAgICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0XG5cbiAgICAgICQoXCJsYWJlbC5jaGVja2FsbC5ub25lXCIpLmNsaWNrIC0+XG4gICAgICAgICQoXCJhcnRpY2xlIHNwYW4uY3VzdG9tXCIpLnJlbW92ZUNsYXNzIFwiY2hlY2tlZFwiXG5cbiAgICAgICQoXCJmb3JtIC5yb3cgYXJ0aWNsZSBsYWJlbFwiKS5jbGljayAtPlxuICAgICAgICBvZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpXG4gICAgICAgICQoXCIuZmlsdGVyc19jb250YWluZXIgYXNpZGVcIikuZmFkZUluKFwiZmFzdFwiKVxuICAgICAgICAkKFwiLmZpbHRlcnNfY29udGFpbmVyIGFzaWRlXCIpLm9mZnNldFxuICAgICAgICAgIHRvcDogb2Zmc2V0LnRvcFxuICAgICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0XG5cbiAgICAgICQoXCIuZmlsdGVyc19jb250YWluZXIgYXNpZGUgdWwgbGlcIikuY2xpY2sgLT5cbiAgICAgICAgJChcIi5maWx0ZXJzX2NvbnRhaW5lciBhc2lkZVwiKS5mYWRlT3V0KFwiZmFzdFwiKVxuXG4gICAgICAgIFxuXG4gICAgICAkKFwiLmVudHJ5XCIpLm1vdXNlZW50ZXIgLT5cbiAgICAgICAkKHRoaXMpLmFwcGVuZChcIjxkaXYgY2xhc3M9J2FjdGlvbnMnIHN0eWxlPSdkaXNwbGF5Om5vbmUnPjx1bD48bGk+IDxhIGhyZWY9JyMnPjwvYT48L2xpPjxsaT4gPGEgaHJlZj0nIyc+PC9hPjwvbGk+PGxpPiA8YSBocmVmPScjJz48L2E+PC9saT48bGk+IDxhIGhyZWY9JyMnPjwvYT48L2xpPjxsaT4gPGEgaHJlZj0nIyc+PC9hPjwvbGk+PC91bD48L2Rpdj5cIilcbiAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiLmFjdGlvbnNcIikuc2hvdygpXG5cbiAgICAgICQoXCIuZW50cnlcIikubW91c2VsZWF2ZSAtPlxuICAgICAgICQodGhpcykuY2hpbGRyZW4oXCIuYWN0aW9uc1wiKS5oaWRlKClcbiAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiLmFjdGlvbnNcIikucmVtb3ZlKClcbiAgICAgIFxuXG4jIExhbmRpbmcgcGFnZSBjb2FjaG1hcmtcblxuICAgICAgJChcIi5jb2FjaG1hcmsgaDJcIikuY2xpY2sgLT5cbiAgICAgICAgJChcImRpdi5jb2FjaG1hcmtcIikuaGlkZSgpXG4gICAgICAgICQoXCJmb3JtIGlucHV0W3R5cGU9J3RleHQnXVwiKS5mb2N1cygpXG4gICAgICAgICQoXCJmb3JtIGlucHV0W3R5cGU9J3RleHQnXVwiKS52YWwgXCJcIlxuICAgICAgXG4gICAgICAkKGRvY3VtZW50KS5rZXlkb3duIC0+XG4gICAgICAgICQoXCJkaXYuY29hY2htYXJrXCIpLmhpZGUoKVxuICAgICAgICAkKFwiZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J11cIikuZm9jdXMoKVxuXG4gICAgICAkKFwiaW5wdXRbdHlwZT0ndGV4dCddLmZpbHRlclwiKS5jbGljayAtPlxuICAgICAgICAkKHRoaXMpLnZhbCBcIlwiXG5cblxuIyBMYW5kaW5nIHNlYXJjaCBhY3Rpb25cblxuICAgICAgJChcImZvcm0gLmJ1dHRvbi5zZWFyY2hcIikuY2xpY2sgLT5cbiAgICAgICAgJChcIi5zZWFyY2hfcmVzdWx0c1wiKS5mYWRlSW4oKVxuXG4gICAgICAkKFwiZm9ybS5jdXN0b21cIikuc3VibWl0IC0+XG4gICAgICAgICQoXCIuc2VhcmNoX3Jlc3VsdHNcIikuZmFkZUluKClcbiAgICAgICAgZmFsc2VcblxuIyBEb2N1bWVudCBvcHRpb25zIFxuXG4gICAgICAkKFwiLmZpbHRlcnNfY29udGFpbmVyIGFzaWRlXCIpLm1vdXNlbGVhdmUgLT5cbiAgICAgICAgJChcIi5maWx0ZXJzX2NvbnRhaW5lciBhc2lkZVwiKS5oaWRlKClcblxuXG4jIEdlbyB2aWV3IGFjdGlvbnNcblxuICAgICAgJChcImEuZ2VvX3ZpZXdcIikuY2xpY2sgLT5cbiAgICAgICAgJChcInNlY3Rpb24uZ2VvX3ZpZXdcIikuZmFkZUluKClcbiAgICAgICAgJChcInNlY3Rpb24uc2VhcmNoX3Jlc3VsdHMsIHNlY3Rpb24uc2F2ZWRzZWFyY2hfcmVzdWx0c1wiKS5oaWRlKClcbiAgICAgICAgJChcImZvcm0uY3VzdG9tIGZpZWxkc2V0XCIpLmhpZGUoKVxuICAgICAgXG4gICAgICAkKFwiLmNsb3NlX21hcFwiKS5jbGljayAtPlxuICAgICAgICAkKFwic2VjdGlvbi5nZW9fdmlld1wiKS5oaWRlKClcbiAgICAgICAgJChcInNlY3Rpb24uc2VhcmNoX3Jlc3VsdHMsIHNlY3Rpb24uc2F2ZWRzZWFyY2hfcmVzdWx0c1wiKS5mYWRlSW4oKVxuICAgICAgICAkKFwiZm9ybS5jdXN0b20gZmllbGRzZXRcIikuc2hvdygpXG5cbiAgICAgICQoXCIubGlzdF9yZXN1bHRzXCIpLmNsaWNrIC0+XG4gICAgICAgICQoQCkudG9nZ2xlQ2xhc3MgXCJyZXN1bHRzX29wZW5lZFwiXG4gICAgICAgICMkKFwiLnJlc3VsdHNfY29udGFpbmVyXCIpLnRvZ2dsZSgpXG4gICAgICAgICQoXCIucmVzdWx0c19jb250YWluZXJcIikuYW5pbWF0ZSB3aWR0aDogXCJ0b2dnbGVcIlxuXG4jIFNhdmVkIHNlYXJjaF9yZXN1bHRzXG5cbiAgICAgICQoXCJzZWN0aW9uLmRvY3VtZW50c19yZXN1bHRzIC5jb250ZW50IHAudGl0bGVcIikuY2xpY2sgLT5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9zYXZlZHNlYXJjaFwiXG5cbiMgU2VhcmNoIEZpbHRlciBoYWNrc1xuICAgICAgJChcIi5hY2NvcmRpb25cIikub24gXCJjbGlja1wiLCBcInNlY3Rpb25cIiwgKGV2ZW50KSAtPlxuICAgICAgICAkKFwic2VjdGlvbi5hY3RpdmVcIikuZmluZChcIi5jb250ZW50XCIpLnNsaWRlVG9nZ2xlIFwic2xvd1wiXG4gICAgICAgICQodGhpcykuZmluZChcIi5jb250ZW50XCIpLnNsaWRlVG9nZ2xlIFwic2xvd1wiXG4iXX0=
