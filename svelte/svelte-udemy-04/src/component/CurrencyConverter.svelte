<script lang="ts">
	import { rates } from '../utils/dummy-rates';

	let baseValue = $state(1);
	let baseCurrency = $state('sgd');
	let baseRates = $derived(rates[baseCurrency]);
	let targetCurrency = $state('idr');
	let targetValue = $state(0);

	$effect(() => {
		if (baseValue && baseRates && baseRates[targetCurrency]) {
			targetValue = +(baseValue * baseRates[targetCurrency]).toFixed(3);
		}
	});

	function updateBaseValue(value: number) {
		baseValue = value;
	}
	function updateTargetValue(value: number) {
		if (baseRates && baseRates[targetCurrency]) {
			baseValue = +(value / baseRates[targetCurrency]).toFixed(3);
		}
	}
	function updateBaseCurrency(value: string) {
		baseCurrency = value;
	}
	function updateTargetCurrency(value: string) {
		targetCurrency = value;
	}
	$inspect(baseRates);
</script>

<section class="section">
	<div class="container">
		<div class="box">
			<div class="columns is-mobile">
				<div class="column">
					<input
						class="input"
						type="number"
						value={baseValue}
						oninput={(e) => {
							updateBaseValue(+e.currentTarget.value);
						}}
					/>
				</div>
				<div class="column">
					<div class="select is-primary">
						<select
							value={baseCurrency}
							oninput={(e) => {
								updateBaseCurrency(e.currentTarget.value);
							}}
						>
							<option value="idr">Rupiah (IDR)</option>
							<option value="sgd">Singapore Dollar (SGD)</option>
							<option value="myr">Malaysian Ringgit (MYR)</option>
							<option value="thb">Thai Baht (THB)</option>
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
						oninput={(e) => {
							updateTargetValue(+e.currentTarget.value);
						}}
					/>
				</div>
				<div class="column">
					<div class="select is-primary">
						<select
							value={targetCurrency}
							oninput={(e) => {
								updateTargetCurrency(e.currentTarget.value);
							}}
						>
							<option value="idr">Rupiah (IDR)</option>
							<option value="sgd">Singapore Dollar (SGD)</option>
							<option value="myr">Malaysian Ringgit (MYR)</option>
							<option value="thb">Thai Baht (THB)</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
