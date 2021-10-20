function(s) {
  var a = e(this),
    o = !1,
    r = t.$menu.find(a).length;
  for (var l in e[n].addons)
    if (e[n].addons[l].clickAnchor.call(t, a, r)) {
      o = !0;
      break
    }
  var d = a.attr("href");
  if (!o && r && d.length > 1 && "#" == d.slice(0, 1)) try {
    var c = e(d, t.$menu);
    c.is("." + i.panel) && (o = !0, t[a.parent().hasClass(i.vertical) ? "togglePanel" : "openPanel"](c))
  } catch (h) {}
  if (o && s.preventDefault(), !o && r && a.is("." + i.listview + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]')) {
    t.__valueOrFn(t.opts.onClick.setSelected, a) && t.setSelected(e(s.target).parent());
    var u = t.__valueOrFn(t.opts.onClick.preventDefault, a, "#" == d.slice(0, 1));
    u && s.preventDefault(), t.__valueOrFn(t.opts.onClick.close, a, u) && t.close()
  }
}
