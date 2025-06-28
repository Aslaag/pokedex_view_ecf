import { useState } from "react";

export function ReviewInput(props) {
  const [reviewInputValue, setReviewInputValue] = useState("");

  //Get input value
  const changeReviewInputValue = (e) => {
    setReviewInputValue(e.target.value)
  }

  //Submit input value
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
          className="border-2 border-lime-500/50 py-1 px-3 rounded-xl md:w-[90%] text:text-lime-700 placeholder:text-sm placeholder:text-lime-700 hover:bg-lime-50 transition-all transition-300" />
    </>
  )
}