import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProductPage = () => {
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
            Iphone
        </div>
        <div className={styles.formContainer}>
          <form action='' className={styles.form}>
            <label>Title</label>
            <input type='text' name='title' placeholder='John Doe'/>
            <label>Price</label>
            <input type='number' name='price' placeholder='$999'/>
            <label>Color</label>
            <input type='text' name='color' placeholder='red'/>
            <label>Stock</label>
            <input type='number' name='stock' placeholder='55'/>
            <label>Size</label>
            <input type='text' name='size' placeholder='size' />
            <label>Cat</label>
            <select name='cat' id='cat'>
              <option value='kitchen'>Kitchen</option>
              <option value='computers'>Computers</option>
            </select>
            <label>Description</label>
            <textarea name='desc' id='desc' placeholder='Description'  cols='30' rows='10'></textarea>
            <button>Update</button>
         </form> 
        </div>
    </div>
  )
}

export default SingleProductPage