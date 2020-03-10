(this.webpackJsonpsmarmakescomics =
  this.webpackJsonpsmarmakescomics || []).push([
  [0],
  {
    19: function(e, t, a) {},
    23: function(e, t, a) {
      e.exports = a(33);
    },
    33: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(15),
        c = a.n(l),
        o = (a(19), a(11)),
        i = a(5),
        u = a(8),
        s = a(9),
        m = a(12),
        h = a(10),
        E = a(13),
        f = (function(e) {
          function t() {
            var e, a;
            Object(u.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(r))
              )).state = {}),
              a
            );
          }
          return (
            Object(E.a)(t, e),
            Object(s.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement("div", { className: "header" });
                }
              }
            ]),
            t
          );
        })(n.Component),
        v = (function(e) {
          function t() {
            var e, a;
            Object(u.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(m.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(r))
              )).state = {}),
              a
            );
          }
          return (
            Object(E.a)(t, e),
            Object(s.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement("div", { className: "footer" });
                }
              }
            ]),
            t
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      function d() {
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function(e) {
              e.unregister();
            })
            .catch(function(e) {
              console.error(e.message);
            });
      }
      var p = function(e) {
        return r.a.createElement(
          "div",
          { id: "illustration" },
          r.a.createElement(f, null),
          r.a.createElement("p", null, "Hey"),
          r.a.createElement(v, null)
        );
      };
      d();
      var b = function(e) {
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(f, null),
          r.a.createElement(
            "ul",
            null,
            r.a.createElement(
              "li",
              null,
              r.a.createElement(
                o.b,
                { to: "/illustration" },
                "Illustration Gallery"
              )
            )
          ),
          r.a.createElement(v, null)
        );
      };
      var j = function() {
        return r.a.createElement(
          o.a,
          { basename: "smarmakescomics" },
          r.a.createElement(
            i.c,
            null,
            r.a.createElement(
              i.a,
              { exact: !0, path: "/" },
              r.a.createElement(b, null)
            ),
            r.a.createElement(
              i.a,
              { path: "/illustration" },
              r.a.createElement(p, null)
            )
          )
        );
      };
      c.a.render(r.a.createElement(j, null), document.getElementById("root")),
        d();
    }
  },
  [[23, 1, 2]]
]);
//# sourceMappingURL=main.872f804f.chunk.js.map
