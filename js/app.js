!(function () {
  "use strict";
  function e(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function t(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function n(e, n, r) {
    return (
      n && t(e.prototype, n),
      r && t(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function r(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function i(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && s(e, t);
  }
  function a(e) {
    return (
      (a = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      a(e)
    );
  }
  function s(e, t) {
    return (
      (s = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      s(e, t)
    );
  }
  function o(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function c(e, t) {
    if (t && ("object" == typeof t || "function" == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return o(e);
  }
  function l(e) {
    var t = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var n,
        r = a(e);
      if (t) {
        var i = a(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return c(this, n);
    };
  }
  var u = (function (t) {
      i(a, React.Component);
      var r = l(a);
      function a() {
        return e(this, a), r.apply(this, arguments);
      }
      return (
        n(a, [
          {
            key: "render",
            value: function () {
              return React.createElement(
                "div",
                { className: "length-control" },
                React.createElement(
                  "div",
                  { id: this.props.titleID },
                  this.props.title
                ),
                React.createElement(
                  "button",
                  {
                    className: "btn-level",
                    id: this.props.minID,
                    onClick: this.props.onClick,
                    value: "-",
                  },
                  React.createElement("i", {
                    className: "fa fa-arrow-down fa-2x",
                  })
                ),
                React.createElement(
                  "div",
                  { className: "btn-level", id: this.props.lengthID },
                  this.props.length
                ),
                React.createElement(
                  "button",
                  {
                    className: "btn-level",
                    id: this.props.addID,
                    onClick: this.props.onClick,
                    value: "+",
                  },
                  React.createElement("i", {
                    className: "fa fa-arrow-up fa-2x",
                  })
                )
              );
            },
          },
        ]),
        a
      );
    })(),
    h = (function (t) {
      i(s, React.Component);
      var a = l(s);
      function s(t) {
        var n;
        return (
          e(this, s),
          ((n = a.call(this, t)).state = {
            brkLength: 5,
            seshLength: 25,
            timerState: "stopped",
            timerType: "Session",
            timer: 1500,
            intervalID: "",
            alarmColor: { color: "white" },
          }),
          (n.setBrkLength = n.setBrkLength.bind(o(n))),
          (n.setSeshLength = n.setSeshLength.bind(o(n))),
          (n.lengthControl = n.lengthControl.bind(o(n))),
          (n.timerControl = n.timerControl.bind(o(n))),
          (n.beginCountDown = n.beginCountDown.bind(o(n))),
          (n.decrementTimer = n.decrementTimer.bind(o(n))),
          (n.phaseControl = n.phaseControl.bind(o(n))),
          (n.warning = n.warning.bind(o(n))),
          (n.buzzer = n.buzzer.bind(o(n))),
          (n.switchTimer = n.switchTimer.bind(o(n))),
          (n.clockify = n.clockify.bind(o(n))),
          (n.reset = n.reset.bind(o(n))),
          n
        );
      }
      return (
        n(s, [
          {
            key: "setBrkLength",
            value: function (e) {
              this.lengthControl(
                "brkLength",
                e.currentTarget.value,
                this.state.brkLength,
                "Session"
              );
            },
          },
          {
            key: "setSeshLength",
            value: function (e) {
              this.lengthControl(
                "seshLength",
                e.currentTarget.value,
                this.state.seshLength,
                "Break"
              );
            },
          },
          {
            key: "lengthControl",
            value: function (e, t, n, i) {
              if ("running" !== this.state.timerState)
                if (this.state.timerType === i)
                  "-" === t && 1 !== n
                    ? this.setState(r({}, e, n - 1))
                    : "+" === t && 60 !== n && this.setState(r({}, e, n + 1));
                else if ("-" === t && 1 !== n) {
                  var a;
                  this.setState(
                    (r((a = {}), e, n - 1), r(a, "timer", 60 * n - 60), a)
                  );
                } else if ("+" === t && 60 !== n) {
                  var s;
                  this.setState(
                    (r((s = {}), e, n + 1), r(s, "timer", 60 * n + 60), s)
                  );
                }
            },
          },
          {
            key: "timerControl",
            value: function () {
              "stopped" === this.state.timerState
                ? (this.beginCountDown(),
                  this.setState({ timerState: "running" }))
                : (this.setState({ timerState: "stopped" }),
                  this.state.intervalID && this.state.intervalID.cancel());
            },
          },
          {
            key: "beginCountDown",
            value: function () {
              var e,
                t,
                n,
                r,
                i,
                a,
                s = this;
              this.setState({
                intervalID:
                  ((e = function () {
                    s.decrementTimer(), s.phaseControl();
                  }),
                  (t = 1e3),
                  (r = new Date().getTime() + t),
                  (i = null),
                  (a = function () {
                    return (
                      (r += t),
                      (i = setTimeout(a, r - new Date().getTime())),
                      e()
                    );
                  }),
                  (n = function () {
                    return clearTimeout(i);
                  }),
                  (i = setTimeout(a, r - new Date().getTime())),
                  { cancel: n }),
              });
            },
          },
          {
            key: "decrementTimer",
            value: function () {
              this.setState({ timer: this.state.timer - 1 });
            },
          },
          {
            key: "phaseControl",
            value: function () {
              var e = this.state.timer;
              this.warning(e),
                this.buzzer(e),
                e < 0 &&
                  (this.state.intervalID && this.state.intervalID.cancel(),
                  "Session" === this.state.timerType
                    ? (this.beginCountDown(),
                      this.switchTimer(60 * this.state.brkLength, "Break"))
                    : (this.beginCountDown(),
                      this.switchTimer(60 * this.state.seshLength, "Session")));
            },
          },
          {
            key: "warning",
            value: function (e) {
              e < 61
                ? this.setState({ alarmColor: { color: "#a50d0d" } })
                : this.setState({ alarmColor: { color: "white" } });
            },
          },
          {
            key: "buzzer",
            value: function (e) {
              0 === e && this.audioBeep.play();
            },
          },
          {
            key: "switchTimer",
            value: function (e, t) {
              this.setState({
                timer: e,
                timerType: t,
                alarmColor: { color: "white" },
              });
            },
          },
          {
            key: "clockify",
            value: function () {
              if (this.state.timer < 0) return "00:00";
              var e = Math.floor(this.state.timer / 60),
                t = this.state.timer - 60 * e;
              return (
                (e = e < 10 ? "0" + e : e) + ":" + (t = t < 10 ? "0" + t : t)
              );
            },
          },
          {
            key: "reset",
            value: function () {
              this.setState({
                brkLength: 5,
                seshLength: 25,
                timerState: "stopped",
                timerType: "Session",
                timer: 1500,
                intervalID: "",
                alarmColor: { color: "white" },
              }),
                this.state.intervalID && this.state.intervalID.cancel(),
                this.audioBeep.pause(),
                (this.audioBeep.currentTime = 0);
            },
          },
          {
            key: "render",
            value: function () {
              var e = this;
              return React.createElement(
                "div",
                null,
                React.createElement(
                  "div",
                  { className: "main-title" },
                  "25 + 5 Clock"
                ),
                React.createElement(u, {
                  addID: "break-increment",
                  length: this.state.brkLength,
                  lengthID: "break-length",
                  minID: "break-decrement",
                  onClick: this.setBrkLength,
                  title: "Break Length",
                  titleID: "break-label",
                }),
                React.createElement(u, {
                  addID: "session-increment",
                  length: this.state.seshLength,
                  lengthID: "session-length",
                  minID: "session-decrement",
                  onClick: this.setSeshLength,
                  title: "Session Length",
                  titleID: "session-label",
                }),
                React.createElement(
                  "div",
                  { className: "timer", style: this.state.alarmColor },
                  React.createElement(
                    "div",
                    { className: "timer-wrapper" },
                    React.createElement(
                      "div",
                      { id: "timer-label" },
                      this.state.timerType
                    ),
                    React.createElement(
                      "div",
                      { id: "time-left" },
                      this.clockify()
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "timer-control" },
                  React.createElement(
                    "button",
                    { id: "start_stop", onClick: this.timerControl },
                    React.createElement("i", { className: "fa fa-play fa-2x" }),
                    React.createElement("i", { className: "fa fa-pause fa-2x" })
                  ),
                  React.createElement(
                    "button",
                    { id: "reset", onClick: this.reset },
                    React.createElement("i", {
                      className: "fa fa-refresh fa-2x",
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "author" },
                  " ",
                  "Designed and Coded by ",
                  React.createElement("br", null),
                  React.createElement(
                    "a",
                    { href: "https://github.com/aftab515", target: "_blank" },
                    "Aftab Sadiq | Alpha Tech"
                  )
                ),
                React.createElement("audio", {
                  id: "beep",
                  preload: "auto",
                  ref: function (t) {
                    e.audioBeep = t;
                  },
                  src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",
                })
              );
            },
          },
        ]),
        s
      );
    })();
  ReactDOM.createRoot(document.getElementById("app")).render(
    React.createElement(h, null)
  );
})();
