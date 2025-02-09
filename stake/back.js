contractaddress = '0x289B291B8123a8d039C28f33F4fB92CC8A1CCE5A'

abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addProfit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "depositMTT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawMTT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawUSDT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feeBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getMTTBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "MTTBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mttToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakersAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalStakedMTT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "USDTBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdtToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]






var range = null;
        var provider = null;
  		var signer = null;
  		var contract = null;
  		//geting account information
  		var myAddress = null;
  		var myBalance = null;
  		//getting current date
  		var date = null;
  		var maxValue = 0;
			var mtt_TVL = 0;
//autofunctions
	async function connectContract_(){
			  		try{
			  		// переменные из frontend
			         range = document.getElementById("my-range");
			         provider = new ethers.providers.Web3Provider(window.ethereum);
			  		 signer = provider.getSigner();
			  		 contract = new ethers.Contract(contractaddress, abi, provider);
			  		//geting account information
			  		 myAddress = provider.getSigner().getAddress();
			  		 myBalance =  provider.getBalance(myAddress);
			  		//getting current date
			  		 date = contract.n.call();
			  		}

	  		catch(error){}}
				connectContract_();

	async function connectMetaMask_(){
				if (window.ethereum) {
				const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
					console.log(accounts);
					const connectButton = document.getElementById('connectButton');
					connectButton.textContent = `${accounts[0].slice(0, 4)}...${accounts[0].slice(-3)}`;
					myAddress = accounts[0];



				} else {
					console.log('MetaMask is not installed');
				}
			}
			connectMetaMask_();

	async function getMTTbalance_() {
			    if (window.ethereum) {
			        try {
			            // Подключаемся к MetaMask
			            const provider = new ethers.BrowserProvider(window.ethereum);

			            // Запрашиваем аккаунты
			            const accounts = await provider.send('eth_requestAccounts', []);
			            const myAddress = accounts[0]; // Первый аккаунт пользователя

			            // Адрес контракта токена
			            const tokenAddress = '0xd3A9b3f20825431560a29698D57CC765540C70E5';

			            // Минимальный ABI для взаимодействия с ERC-20 токеном
			            const IERC20abi = [
			                "function balanceOf(address account) external view returns (uint256)"
			            ];

			            // Создаем экземпляр контракта с провайдером
			            const tokenContract = new ethers.Contract(tokenAddress, IERC20abi, provider);

			            // Вызываем функцию balanceOf
			            var mttBalance = await tokenContract.balanceOf(myAddress);

									const mtt_button = document.getElementById('mtt_h');
			            // Преобразуем баланс в удобный формат
									var formattedMTTbalance = ethers.formatUnits(mttBalance);
										formattedMTTbalance = Math.floor(formattedMTTbalance);
				            mtt_button.textContent = (`${formattedMTTbalance} MTT`);

										return(formattedMTTbalance);

			        } catch (error) {
			            console.error('Error during getting balance:', error);
			        }
			    } else {
			        console.error('MetaMask is not installed.');
			    }
			}
			getMTTbalance_();


	async function getOtherBalances_() {
			if (window.ethereum) {
					try {
							// Подключаемся к MetaMask
							const provider = new ethers.BrowserProvider(window.ethereum);

							// Запрашиваем аккаунты
							const accounts = await provider.send('eth_requestAccounts', []);
							const myAddress = accounts[0]; // Первый аккаунт пользователя

							// Адрес контракта токена
							var addresses = ['0x55d398326f99059fF775485246999027B3197955', 'bnb', '0xf4B8D3469F237c86da0C2D94284E1ed22Cb91497'];
							var options = ['USDT', 'BNB', 'USM']


							// Минимальный ABI для взаимодействия с ERC-20 токеном
							const IERC20abi = [
									"function balanceOf(address account) external view returns (uint256)"
							];

							for(let a = 0; a < addresses.length; a++){
							// Создаем экземпляр контракта с провайдером
							var address_;
							var balance;

							if(addresses[a] == 'bnb'){balance = await provider.getBalance(myAddress);}

							else{
									const tokenContract = new ethers.Contract(addresses[a], IERC20abi, provider);

									// Вызываем функцию balanceOf
									balance = await tokenContract.balanceOf(myAddress);
							}
							balance = parseFloat(balance);
							balance = balance / 10**18
							balance = balance.toFixed(2);
							const option = document.getElementById(`option${a}`);
							// Преобразуем баланс в удобный формат
							option.textContent = (`${balance} ${options[a]}`);
							if(a==0){
								const panel = document.getElementById(`usdt-bal`);
								// Преобразуем баланс в удобный формат
								panel.textContent = (`${balance} ${options[a]}`);
							}
						}

					} catch (error) {
							console.error('Error during getting balance:', error);
					}
			} else {
					console.error('MetaMask is not installed.');
			}
			}
			getOtherBalances_();

			async function getProfitData_()  {
					    if (window.ethereum) {
					        try {
					            // Подключаемся к MetaMask
					            const provider = new ethers.BrowserProvider(window.ethereum);

					            // Запрашиваем аккаунты
					            const accounts = await provider.send('eth_requestAccounts', []);
					            const myAddress = accounts[0]; // Первый аккаунт пользователя


					            // Создаем экземпляр контракта с провайдером
					            const contract = new ethers.Contract(contractaddress, abi, provider);

					            // Вызываем функцию balanceOf
					            var usdtBalance = await contract.USDTBalance('0xba742c610d3540c68688eaafcb6409e9e790d554');

											usdtBalance = parseFloat(usdtBalance);
											usdtBalance = usdtBalance * 0.995;
											var toreturn_ = usdtBalance;


											usdtBalance = (usdtBalance/10**18).toFixed(3)

											console.log(usdtBalance);
											const profitdata = document.getElementById('your_profit');
					            // Преобразуем баланс в удобный формат
											profitdata.textContent = (`${usdtBalance} USDT`);


											return(toreturn_)

					        } catch (error) {
					            console.error('Error during getting balance:', error);
					        }
					    } else {
					        console.error('MetaMask is not installed.');
					    }
					}
					getProfitData_();




async function getTVL_(){
			const provider = new ethers.BrowserProvider(window.ethereum);

			// Запрашиваем аккаунты
			const accounts = await provider.send('eth_requestAccounts', []);
			const myAddress = accounts[0]; // Первый аккаунт пользователя


			// Создаем экземпляр контракта с провайдером
			const contract = new ethers.Contract(contractaddress, abi, provider);

			var tvl = await contract.totalStakedMTT()

			tvl = parseFloat(tvl);
			tvl = (tvl/10**18).toFixed(0);

			document.getElementById('tvl').textContent = `${tvl} MTT`
			document.getElementById('info-tvl').textContent  = `TVL: ${tvl} MTT`

			mtt_TVL = tvl;
			return tvl;

}

getTVL_()



async function getPersonalStakedSum_(){
			const provider = new ethers.BrowserProvider(window.ethereum);

			// Запрашиваем аккаунты
			const accounts = await provider.send('eth_requestAccounts', []);
			const myAddress = accounts[0]; // Первый аккаунт пользователя


			// Создаем экземпляр контракта с провайдером
			const contract = new ethers.Contract(contractaddress, abi, provider);

			var sum = await contract.getMTTBalance(myAddress);

			sum = parseFloat(sum);
			sum = (sum/10**18).toFixed(0);

			var tvl = mtt_TVL;

			

			// console.log(2112321132)
			var part = sum / tvl * 100;
			part = part.toFixed(3)
			part = part.toString() + '%';

			document.getElementById('personalVolume').textContent = `${sum} MTT (${part})`
			document.getElementById('info-personalVolume').textContent  = `You staked: ${sum} MTT`

			return(tvl)
}

getPersonalStakedSum_()



//contract interaction



			async function approve(tokenContract, spenderAddress, amount) {
					try {
							// Убедитесь, что MetaMask установлен и доступен
							if (!window.ethereum) {
									throw new Error('MetaMask is not installed!');
							}

							// Создаем провайдер и подписанта
							const provider = new ethers.BrowserProvider(window.ethereum);
							const signer = await provider.getSigner();

							// Запрашиваем аккаунты
							const accounts = await provider.send('eth_requestAccounts', []);
							const myAddress = accounts[0]; // Первый аккаунт пользователя

							// ABI стандарта ERC20 (частичное)
							const abi_ = [
									"function approve(address spender, uint256 amount) public returns (bool)"
							];

							// Создаем экземпляр контракта
							const contract = new ethers.Contract(tokenAddress, abi_, signer);

							// Вызываем функцию approve
							const tx = await contract.approve(spenderAddress, amount);
							console.log('Transaction sent:', tx.hash);

							// Ожидаем подтверждения транзакции
							const receipt = await tx.wait();
							console.log('Transaction confirmed:', receipt);

							return receipt;
					} catch (error) {
							console.error('Error during approval:', error);
							throw error;
					}
			}




async function stakeMTT(amount) {
	try {
			// Подключение к Ethereum провайдеру (например, MetaMask)
			const provider = new ethers.BrowserProvider(window.ethereum);

			// Запросить доступ к аккаунту пользователя
			await provider.send("eth_requestAccounts", []);

			// Получение signer'а
			const signer = await provider.getSigner();

			// Создание экземпляра контракта
			const contract = new ethers.Contract(contractaddress, abi, signer);

			console.log(amount)

			// Преобразование суммы в формат Wei
			const formattedAmount = ethers.parseUnits(amount.toString());

			approval = approve('0x289B291B8123a8d039C28f33F4fB92CC8A1CCE5A', )

			// Вызов функции depositMTT
			const tx = await contract.depositMTT(formattedAmount);

			// Ожидание подтверждения транзакции
			const receipt = await tx.wait();

			console.log("Транзакция выполнена успешно!", receipt);
	} catch (error) {
			console.error("Ошибка выполнения транзакции:", error);
	}
}


async function unstakeMTT(amount) {
	try {
			// Подключение к Ethereum провайдеру (например, MetaMask)
			const provider = new ethers.BrowserProvider(window.ethereum);

			// Запросить доступ к аккаунту пользователя
			await provider.send("eth_requestAccounts", []);

			// Получение signer'а
			const signer = await provider.getSigner();

			// Создание экземпляра контракта
			const contract = new ethers.Contract(contractaddress, abi, signer);

			console.log(amount)

			// Преобразование суммы в формат Wei
			const formattedAmount = ethers.parseUnits(amount.toString());

			// Вызов функции depositMTT
			const tx = await contract.withdrawMTT(formattedAmount);

			// Ожидание подтверждения транзакции
			const receipt = await tx.wait();

			console.log("Транзакция выполнена успешно!", receipt);
	} catch (error) {
			console.error("Ошибка выполнения транзакции:", error);
	}
}


async function recieveUSDT(){
	const provider = new ethers.BrowserProvider(window.ethereum);

	await provider.send("eth_requestAccounts", []);

	const signer = await provider.getSigner();

	const contract = new ethers.Contract(contractaddress, abi, signer);

	var amount = await getProfitData_();

	console.log(amount);
	const tx = await contract.withdrawUSDT(amount);
}








//website interaction


async function fastSetMTTvolume(percent){
		var MTTbalance = await getMTTbalance_();
		var totext = MTTbalance*percent/100;


		const inp = document.getElementById('amountInput');
		inp.value = totext;
}
