import styles from './products.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../../ui/dashboard/search/search';
import Pagination from '../../ui/dashboard/pagination/pagination';


const ProductsPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
     <Search placeholder='Search for a user..' />
     <Link href={'/dashboard/users/add'}>
      <button className={styles.addButton}>Add New</button>
     </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created at</td>
          <td>Stock</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.product}>
              <Image src='/noproduct.jpg' alt='' width={40} height={40} className={styles.productImage} />
              Iphone
            </div>
          </td>
          <td>Desc</td>
          <td>$999</td>
          <td>01.01.2024</td>
          <td>72</td>
          <td>
            <div className={styles.buttons}>
              <Link href='/dashboard/products/test'>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <Link href='/'>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </Link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination />
  </div>
  )
}

export default ProductsPage;