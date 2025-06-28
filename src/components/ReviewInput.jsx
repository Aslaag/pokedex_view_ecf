import { useState } from "react";

export function ReviewInput(props) {
  const [reviewInputValue, setReviewInputValue] = useState("");
  const changeReviewInputValue = (e) => {
    setReviewInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      props.onSubmitReview(reviewInputValue);
      setReviewInputValue("");
    }
  }

  return (
    <>
        <input 
         onChange={changeReviewInputValue}
         onKeyDown={handleKeyDown}
          type="text" 
          placeholder="Add a review..." 
          className="border-1 rounded-xl placeholder:p-2" />
    </>
  )
}