import { useSelector } from "react-redux";
import React from 'react'

const MovieReview = ({avatar_path, item}) => {
    const{MovieReviews} = useSelector(state=>state.detail)
  return (
    <article>
 <div
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    maxWidth: "120px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.author}
                </div>
                <div
                  style={{
                    color: "red",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {item.author_details.rating ? (
                    <p>{item.author_details.rating} / 10</p>
                  ) : (
                    <p
                      style={{
                        color: "gray",
                        fontSize: 8,
                      }}
                    >
                      NOT SCORED
                    </p>
                  )}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    paddingLeft: "20px",
                  }}
                >
                  {item.updated_at.slice(0, 10)}
                </div>
                <div className="review_content_section">
            <div className="review_content">{item.content}</div>
            <div className="review_content_readMore">Read more</div>
          </div>
    </article>
  )
}

export default MovieReview