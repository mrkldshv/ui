import React from 'react'
import Typography from '../Typography'
import './Card.css'

interface CardProps {
  children?: React.ReactNode
  className?: string
  cover?: React.ReactNode
  description?: string
  hoverable?: boolean
  style?: React.CSSProperties
  title?: string
  titleExtra?: React.ReactNode
}


function Card({
  children,
  className,
  cover,
  hoverable,
  style,
  title,
  titleExtra,
}: CardProps) {

  let classes = ['sbui-card']
  if(hoverable)
  classes.push('sbui-card--hoverable')
  if(className)
  classes.push(className)

  return (
    <div className={classes.join(' ')} style={style}>
      {title && (
        <div className="sbui-card-head">
          <Typography.Text style={{ margin: 0 }}>{title}</Typography.Text>
          <Typography.Link style={{ margin: 0 }}>{titleExtra}</Typography.Link>
        </div>
      )}
      {cover}
      <div className="sbui-card-content">
        {children}
      </div>
    </div>
  )
}

interface MetaProps {
  title?: string
  description?: string
  style?: React.CSSProperties
  className?: string
}

function Meta({ title, description, style, className }: MetaProps) {
  return (
    <div style={style} className={className}>
      <Typography.Title style={{margin: '0'}} level={5}>{title}</Typography.Title>
      <div>
      <Typography.Text type="secondary">{description}</Typography.Text>
      </div>
    </div>
  )
}

Card.Meta = Meta
export default Card