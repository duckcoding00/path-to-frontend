<script lang="ts">
	let baseValue = $state(1);
	let baseCurrency = $state('idr');
	let baseRates: Record<string, number> = $state({});
	let targetCurrency = $state('sgd');
	let targetValue = $state(0);
	let lastModified = $state<'base' | 'target'>('base');

	let currencies = fetch(
		'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json'
	).then((c) => c.json());

	async function rates() {
		try {
			const res = await fetch(
				`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`
			);

			if (!res.ok) throw new Error('Failed to fetch rates');

			const resJson = await res.json();
			baseRates = resJson[baseCurrency] || {};

			if (lastModified === 'base') {
				calculateAndSetTarget();
			} else {
				calculateAndSetBase();
			}
		} catch (error) {
			console.error('Error fetching rates:', error);
			baseRates = {};
		}
	}

	function calculateAndSetTarget() {
		if (baseValue && baseRates[targetCurrency]) {
			targetValue = +(baseValue * baseRates[targetCurrency]).toFixed(3);
		}
	}

	function calculateAndSetBase() {
		if (targetValue && baseRates[targetCurrency]) {
			baseValue = +(targetValue / baseRates[targetCurrency]).toFixed(3);
		}
	}

	function updateBaseValue(value: number) {
		baseValue = value;
		lastModified = 'base';
		calculateAndSetTarget();
	}

	function updateTargetValue(value: number) {
		targetValue = value;
		lastModified = 'target';
		calculateAndSetBase();
	}

	$effect(() => {
		rates();
	});

	$inspect(baseRates);
</script>

<section class="section">
	<div class="container">
		{#await currencies}
			<p>loading get data...</p>
		{:then currency}
			<div class="box">
				<div class="columns is-mobile">
					<div class="column">
						<input
							class="input"
							type="number"
							value={baseValue}
							oninput={(e) => updateBaseValue(+e.currentTarget.value)}
						/>
					</div>
					<div class="column">
						<div class="select is-primary">
							<select bind:value={baseCurrency} onchange={() => rates()}>
								{#each Object.entries(currency) as [key, value]}
									<option value={key}>{value}</option>
								{/each}
							</select>
						</div>
					</div>
				</div>
				<div class="columns is-mobile">
					<div class="column">
						<input
							class="input"
							type="number"
							value={targetValue}
							oninput={(e) => updateTargetValue(+e.currentTarget.value)}
						/>
					</div>
					<div class="column">
						<div class="select is-primary">
							<select
								bind:value={targetCurrency}
								onchange={() => {
									if (lastModified === 'base') {
										calculateAndSetTarget();
									} else {
										calculateAndSetBase();
									}
								}}
							>
								{#each Object.entries(currency) as [key, value]}
									<option value={key}>{value}</option>
								{/each}
							</select>
						</div>
					</div>
				</div>
			</div>
		{:catch error}
			<p>something error {error}</p>
		{/await}
	</div>
</section>
