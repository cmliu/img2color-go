export default {
	async fetch(request, env, ctx) {
		let url = new URL(request.url);
		url.hostname = "img2color-go-eta.vercel.app";
		return await fetch(new Request(url, request))
	},
};
