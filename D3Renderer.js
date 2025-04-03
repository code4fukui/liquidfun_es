// forked from https://qiita.com/Quramy/items/578efec667267acf6871

export class D3Renderer {
  constructor() {
		d3.select('body').append('svg').attr('id', 'viz').append('g').classed('world', true);
		this.resize();
	}
	render(world) {
		const viz = d3.select('svg#viz g.world');
		this.drawBodies(viz, world.bodies);
		this.drawParicles(viz, world.particleSystems[0]);
	}
	drawBodies(selection, bodies) {
    const bounds = d3.svg.line().x(vec => vec.x).y(vec => vec.y);
		const bodyGroups = selection.selectAll('g.body').data(bodies, b => b.ptr);
		bodyGroups.enter().append('g').classed('body', true).attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', 0.01);
		bodyGroups.each(function(b) {
			d3.select(this).selectAll('path').data(b.fixtures).enter().append('path').attr('d', fixture => {
				return bounds(fixture.shape.vertices);
			});
		});
		bodyGroups.attr('transform', b => {
			const pos = b.GetPosition(), angle = b.GetAngle() * 180 / Math.PI;
			return 'translate(' + pos.x + ', ' + pos.y + '), rotate(' + angle + ')';
		});
		bodyGroups.exit().remove();
	}
	drawParicles(selection, system) {
		const particleGroup = selection.selectAll('g.particle').data(system.particleGroups)
		const positionBuf = system.GetPositionBuffer();
		particleGroup.enter().append('g').classed('particle', true).attr('fill', (_, i) => {
			return d3.hsl((i * 45 + 0) % 360, 0.9, 0.5);
		});
		particleGroup.each(function(pg) {
			const dataSet = d3.select(this).selectAll('circle').data(new Array(pg.GetParticleCount()));
			const offset = pg.GetBufferIndex();
			dataSet.enter().append('circle').attr('r', system.radius * 0.75);
			dataSet.attr('cx', (_, i) => {
				return positionBuf[(i + offset) * 2];
			}).attr('cy', (_, i) => {
				return positionBuf[(i + offset) * 2 + 1];
			});
			dataSet.exit().remove();
		});
		particleGroup.exit().remove();
	}
	resize() {
    const w = innerWidth;
    const h = innerHeight;
		const scale = (w < h ? w : h) * 0.23;
		const viz = d3.select('svg#viz');
		viz.style('width', '100%').style('height', h + 'px');
		const translate = 'translate(' + (w / 2) + ', ' + (h / 2 + scale * 2) + ')';
		const scale2 = 'scale(' + scale + ', ' + (-scale) + ')';
		viz.select('g').attr('transform', [translate, scale2].join());
	}
}
