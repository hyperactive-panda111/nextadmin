import styles from '../../ui/dashboard/users/users.module.css';
import Search from '../../ui/dashboard/search/search'
import Pagination from '../../ui/dashboard/pagination/pagination'
import Link from 'next/link';
import Image from 'next/image';

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
       <Search placeholder='Search for a user..' />
       <Link href={'/dashboard/users/test'}>
        <button className={styles.addButton}>Add New</button>
       </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src='/noavatar.png' alt='' width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>john@email.com</td>
            <td>13.01.2020</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href='/'>
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

export default UsersPage