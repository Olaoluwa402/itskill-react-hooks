import React, {useState} from 'react'

const Form = () => {
    const initialValue = {
        name:'',
        email:'',
        age:'',
        password:'',
        file:'',
        stack:{
            javascript:false,
            react:false,
            node:false
        },
        gender:false,
    }
    const [formData, setFormData]  = useState(initialValue)

    const changeHandler = (e) =>{
        console.log('change')
        }

    const submitHandler = (e) =>{
    console.log('submit')
    }

    const selectOptions = [
        {
            label:'--select--',
            value:''
        },
        {
            label:'Maths',
            value:'maths'
        },
        {
            label:'English',
            value:'english'
        },
        {
            label:'French',
            value:'french'
        },
    ]
    const options = selectOptions.map(({label,value})=> (<option value={value}>{label}</option>))
  
  const {name, password, email, age, file, stack,gender} = formData
    return (
    <div>
        <form>
            <input 
                type='text' 
                value={name} 
                placeholder='name'
                onChange={changeHandler} 
            />
            <input 
                type='number' 
                value={age} 
                placeholder='age'
                onChange={changeHandler} 
            />
              <input 
                type='email' 
                value={email} 
                placeholder='email'
                onChange={changeHandler} 
            />
              <input 
                type='password' 
                value={[password]} 
                placeholder='[password]'
                onChange={changeHandler} 
            />
            <div>
                <input 
                    type='checkbox' 
                    placeholder='react'
                    onChange={changeHandler} 
                />
                <input 
                type='checkbox' 
                placeholder='javascript'
                onChange={changeHandler} 
            />
            <input 
                type='checkbox' 
                placeholder='node'
                onChange={changeHandler} 
            />
            </div>

            <input 
                type='file' 
                value={file} 
                placeholder='file'
                onChange={changeHandler} 
            />

            <div>
            <input 
                type='radio' 
                value='male' 
                onChange={changeHandler} 
            />
            <input 
                type='radio' 
                value='female' 
                onChange={changeHandler} 
            />
            <input 
                type='radio' 
                value='others'
                onChange={changeHandler} 
            />
            </div>

            <select >
                <label htmlFor="">Courses</label>
              {options}
            </select>

              
            <button onClick={submitHandler}>Submit</button>
        </form>
    </div>
  )
}

export default Form