import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image 
                  src={'/noavatar.png'}
                  alt=''
                  fill
                />
            </div>
            John Doe
        </div>
        <div className={styles.formContainer}>
          <form action='' className={styles.form}>
            <label>Username</label>
            <input type='text' name='username' placeholder='John Doe'/>
            <label>Email</label>
            <input type='email' name='email' placeholder='email'/>
            <label>Password</label>
            <input type='password' name='password' placeholder=''/>
            <label>Phone</label>
            <input type='' name='' placeholder=''/>
            <label>Address</label>
            <textarea type='type' name='address' placeholder='London, United Kingdom' row='16' />
            <label>isAdmin?</label>
            <select name='isAdmin' id='isAdmin'>
              <option value={false} selected>Is Active?</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>  
            </select>
            <label>isActive?</label>
            <select name='isActive' id='isActive'>
              <option value={false} selected>Is Active?</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>  
            </select>
            <button>Update</button>
         </form> 
        </div>
    </div>
  )
}

export default SingleUserPage