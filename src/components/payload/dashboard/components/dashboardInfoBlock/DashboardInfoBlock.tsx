import Link from 'next/link'
import { FC } from 'react'
import './dashboardInfoBlock.scss'

export interface IDashboardInfoBlock {
  className?: string
  //icon?:
  label?: string
  link?: string
  count?: number
}

const DashboardBlock: FC<IDashboardInfoBlock> = async (props) => {
  const { className, label, link, count } = props
  if (!link) return

  return (
    <Link href={link} className={`dashboardBlock ${className}`}>
      <div className="dashboardBlock__icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 7C9 5.89543 9.89543 5 11 5H17C18.1046 5 19 5.89543 19 7V13C19 14.1046 18.1046 15 17 15H11C9.89543 15 9 14.1046 9 13V7Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M5 11C5 9.89543 5.89543 9 7 9V9H8V17H15V18C15 19.1046 14.1046 20 13 20H7C5.89543 20 5 19.1046 5 18V11Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="dashboardBlock__label">{label}</div>
      <div className="dashboardBlock__count">{count}</div>
    </Link>
  )
}

export default DashboardBlock
