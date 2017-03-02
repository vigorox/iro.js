let marker = function (ctx, opts) {
  this.ctx = ctx;
  this.opts = opts;
  this.last = false;
};

marker.prototype = {
  _ring: function (x, y, color, lineWidth) {
    var ctx = this.ctx;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(x, y, this.opts.r, 0, 2 * Math.PI);
    ctx.stroke();
  },
  draw: function (x, y) {
    this._ring(x, y, "#333", 4);
    this._ring(x, y, "#fff", 2);
  },
  move: function (x, y) {
    var last = this.last;
    var radius = (this.opts.r + 4);
    if (last) this.ctx.clearRect(last.x - radius, last.y - radius, radius * 2, radius * 2);
    this.draw(x, y);
    this.last = {x, y};
  }
};

export default marker;
