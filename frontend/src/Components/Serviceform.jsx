import { useState } from "react";
import { toast } from "react-toastify";
import { addService } from "../Services/ServiceOfService";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../Context/LoginContext";

const initialState = {
  title: "",
  description: "",
  duration: "",
  type: "",
  amount: "",
  userId: ""
};


export default function ServiceForm() {

    const [state,setState] = useState(initialState)
    const { id } = useLoginContext();

    const navigate = useNavigate();

    state.userId = id;

    const handleChange = (event) =>{
        setState({...state,[event.target.name]:event.target.value})
    }

    const handleSubmit = async(event) =>{
        event.preventDefault()

        if(!state.title || !state.description || !state.duration || !state.type || !state.amount){
          toast.error("Please fill all the fields")
          return
        } 

        console.log(state)

        await addService(state).then((response)=>{
          if(response==='OK'){
            //Why toast is not being diplayed here?
            //Suggest required changes
            toast.success("Service added successfully")
            navigate("/dashboard")}
          else
          toast.error("Something went wrong. Please try again.")
        })
    }

    return (
      <form
        class="w-full max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div class="w-full px-6 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xm font-bold mb-3"
            for="grid-first-name"
          >
            Title
          </label>
          <input
            class="appearance-none block w-full  text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Enter a title"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
        </div>
  
        <div class="flex flex-wrap -mx-3 px-6 qmb-6 ">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-black-700 text-xm font-bold mb-3"
              for="grid-password"
            >
              Description
            </label>
            <input
              class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              placeholder="Add description in few lines"
              name="description"
              value={state.description}
              onChange={handleChange}
            />
          </div>
        </div>
  
        <div class="flex flex-wrap -mx-3 px-6 mb-3">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-black-700 text-xm font-bold mb-3"
              for="grid-password"
            >
              Duration
            </label>
            <input
              class="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="number"
              placeholder="Enter duration in minutes"
              name="duration"
              value={state.duration}
              onChange={handleChange}
            />
          </div>
        </div>
  
        <div class="w-full  px-6 mb-3 ">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xm font-bold mb-3"
            for="grid-state"
          >
            Select Type
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="type"
              value={state.type}
              onChange={handleChange}
            >
              <option>1:1 Call</option>
              <option>Mock Interview</option>
              <option>Mock Test</option>
              <option>Online Meet</option>
              <option>Direct Message</option>
              <option>Other</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full px-6 mb-6 ">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xm font-bold mb-3"
            for="grid-zip"
          >
            Amount(₹)
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="number"
            placeholder="Enter Amount in Ruppee"
            name="amount"
            value={state.amount}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="flex flex-wrap  w-full max-w-lg items-center justify-center rounded-md bg-black py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
          onClick={handleSubmit}
        >
          save
        </button>
      </form>
    );
  }
  