import React from 'react'
import './log_reg.css'
import { Link } from 'react-router-dom'

const Log_Reg = () => {
  return (
    <>
      <div className='container about_page'>
        <div className='row pt-4'>
          <div className='col-md-6'>
           <h3 className='title_log_page'>logine</h3>
           <div className='logine_page_form pt-4 pb-5'>
            <form>
              <div className='row'>
                <div class="col-12 col-sm-12 checkout_form">
                  <label>User Name</label>
                  <input type="text" autocomplete="off" />
                </div>
                <div class="col-12 col-sm-12 checkout_form">
                  <label>Password</label>
                  <input type="text" autocomplete="off" />
                </div>
                <div class="col-12 col-sm-12 checkout_form">
                  <label className='forgote_password'>
                    <Link to="#">Forgot Password?</Link>
                  </label>
                </div>
                <div class="col-12 col-sm-12">
                  <div className='row align-items-center submit_group'>
                    <div className='col-md-6 col-12'>
                     <input className='submit' type="submit" value="Submit" />
                    </div>
                    <div className='col-md-6 col-12'>
                     <label>
                       <input className='remember_check_box' type="checkbox" autocomplete="off" />Remember Me
                     </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
           </div>
          </div>
          <div className='col-md-6'>
           <h3 className='title_log_page'>Registation</h3>
           <div className='logine_page_form pt-4 pb-5'>
            <form>
              <div className='row'>
                <div class="col-12 col-sm-12 checkout_form">
                  <label>Name</label>
                  <input type="text" autocomplete="off" />
                </div>
                <div class="col-12 col-sm-12 checkout_form">
                  <label>Email</label>
                  <input type="email" autocomplete="off" />
                </div>
                <div class="col-12 col-sm-12 checkout_form">
                  <label>Password</label>
                  <input type="password" autocomplete="off" />
                </div>
                <div class="col-12 col-sm-12 checkout_form">
                  <label>Confirm Password</label>
                  <input type="password" autocomplete="off" />
                </div>
                <div class="col-12 col-sm-12 submit_group">
                <input className='submit' type="submit" value="Submit" />
                </div>
              </div>
            </form>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Log_Reg
