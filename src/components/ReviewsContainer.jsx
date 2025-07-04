import { useEffect, useState } from "react";
import { ReviewCard } from "../components/ReviewCard";
import { ReviewInput } from "../components/ReviewInput";
import { addReview, fetchReviews } from "../utils/pokemon-utils";

export function ReviewsContainer(props) {
  const [reviewQuery, setReviewQuery] = useState("");
  const [pokemonReviews, setPokemonReviews] = useState(null);
  
   //Fetch the reviews
    async function loadReviews() {
      const pokemonReviewsData = await fetchReviews(props.id);
      setPokemonReviews(pokemonReviewsData);
    }

  //Display the reviews
    useEffect(() => {
      loadReviews();
    }, [props.id]);

    //add a review with query value
    useEffect(() => {
      if (reviewQuery) {
       addReview(props.id, reviewQuery);
      }

    }, [reviewQuery]);

  return (
    <div className="py-5 md:py-10 flex flex-col gap-5">
      <h2 className="text-lg font-bold">Reviews</h2>
      <div className="flex flex-col gap-6 p-1">
        <ReviewInput onSubmitReview={setReviewQuery}/>
        {pokemonReviews && <div className="flex flex-col gap-4 pt-5 md:h-[500px] md:overflow-y-scroll">
          {pokemonReviews.map((review) => (
            <ReviewCard key={review.id} author={review.author} content={review.content}/>
            )
          )}
        </div>}
      </div>
          
    </div>
  )
}