import React from 'react'
import styles from "./discountbar.module.css"
function DiscountBar() {
  return (
    <div className={styles.bar}>
      <p>
        Get up to ₹10000.00 instant cashback with eligible cards.* Plus up to 12
        months of No Cost EMI.‡ Shop
      </p>
    </div>
  );
}

export default DiscountBar