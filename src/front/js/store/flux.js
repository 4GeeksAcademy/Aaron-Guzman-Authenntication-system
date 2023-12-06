const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}, 

			],

			userAccess : false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			createNewUser: async (newUser) => {
				try{
					const response = await fetch(process.env.BACKEND_URL + "/api/signup",{
						method: "POST",
						body: JSON.stringify(newUser),
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if(!response.ok){
						throw new Error("There was a problem request")
					}
						const data = await response.json()
						console.log('User created sccessfully', data)
						const actions = getActions();

				}

				catch(error){
					console.error("Cannot create the new user", error)
				}
			},

			tokenConfirmation: async (user) => {
				try{
					const response = await fetch(process.env.BACKEND_URL + "/api/login",{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(user)
					});
					
					if(!response.ok){
						throw new Error("There was a problem request")
					}
					const data = await response.json();
					console.log("data:", data)
					if(response.ok){
						setStore({
							userAccess: true
						})
						return data;
					}

					// if(data.access === true){ 
					// console.log("Llamada de set store")
					// setStore({userAcces : true});}
					// console.log("Token validado exitosamente", data);
					
				}

				catch(error){
					console.error("There was an error trying to take the confirmation", error)
				}
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
