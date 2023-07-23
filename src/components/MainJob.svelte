<script lang="ts">
  import Carousel from "svelte-carousel";
  import Job from "./Job.svelte";
  import { browser } from "$app/environment";
  import ThreeJobs from "./ThreeJobs.svelte";

  let carousel; // for calling methods of the carousel instance
  const handleNextClick = () => {
    carousel.goToNext();
  };
</script>

<div class="w-full py-[3rem]">
  <div class="max-w-[90%] mx-auto my-0">
    <div class="text-center w-full text-[1.5rem] font-light">Trending Jobs</div>
    {#if browser}
      <Carousel bind:this={carousel} arrows={false}>
        <ThreeJobs />
        <ThreeJobs />
        <ThreeJobs />
        <ThreeJobs />
        <ThreeJobs />
      </Carousel>
    {/if}
  </div>

  <div class="w-full flex justify-center my-[2.5%]">
    <a class="hover:text-[#0704e1] outline-none" href="/">
      <div class="font-bold text-xs">View all trending jobs</div>
    </a>
  </div>
  <div
    class="w-full my-0 mx-auto py-[1rem] py-auto h-[25px]
        bg-no-repeat bg-center bg-[length:20px]
        bg-[url('https://asset.jobstore.com/images/icon_separator_x.png')]"
  />
</div>
