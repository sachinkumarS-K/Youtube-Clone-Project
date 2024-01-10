import React from 'react'
import ShimmerCard from './ShimmerCard'

const Shimmer = () => {
  return (
    <div className="lg:absolute lg:top-[10rem] lg:left-[20rem] lg:mt-0 mt-24 lg:px-0 px-5  flex flex-wrap gap-8" >
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
}

export default Shimmer
