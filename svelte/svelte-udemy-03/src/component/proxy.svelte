<script>
	const target = {
		firstname: 'Ardi',
		lastname: 'Sasongko'
	};

	const handler = {
		get(target, prop) {
			return prop in target ? target[prop] : 'NA';
		},

		set(target, prop, value) {
			if (['firstname', 'lastname'].includes(prop)) {
				if (typeof value !== 'string') {
					throw new TypeError(`property ${prop} must string`);
				}
			}

			target[prop] = value;
			return true;
		}
	};

	const proxy = new Proxy(target, handler);
	proxy.firstname = 'last';
	console.log(proxy.firstname);
</script>

<style></style>
