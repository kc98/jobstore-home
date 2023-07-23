<script lang="ts">
  import MainJob from "../components/MainJob.svelte";
  import PopularSearches from "../components/PopularSearches.svelte";
</script>

<svelte:head>
  <title>Jobstore.com - Search Jobs in Malaysia | July 2023</title>
</svelte:head>
<div class="flex h-[450px] w-full">
  <div class="bg-index-left w-1/4 bg-no-repeat bg-center bg-cover" />
  <div class="bg-purple w-1/2 flex justify-center">
    <div class="w-[85%] flex flex-col items-center">
      <h1
        class="text-white text-[1.65rem] font-extrabold m-8 text-center my-[4rem]"
      >
        9,081 jobs available in
        <a href="/"><span class="underline">Malaysia</span></a>
      </h1>
      <div class="w-full">
        <div
          class="bg-white rounded-md p-[2.5%] flex width-[95%] items-center justify-between"
        >
          <input
            type="text"
            name="keyword"
            class="outline-none text-xs w-[38%] px-[1.5%]"
            id=""
            placeholder="Search by job title or keyword"
            autocomplete="off"
          />
          <span class="h-[40px] border-l border-[#ddd]" />
          <input
            type="text"
            name="location"
            class="outline-none text-xs w-[38%] px-[1.5%]"
            id=""
            placeholder="Location or city"
            autocomplete="off"
          />
          <div
            class="bg-location bg-no-repeat bg-center bg-[length:15px] w-[5%] h-[40px]"
          />
          <button
            class="bg-search bg-no-repeat bg-center bg-[length:20px] w-[13%] bg-purple-blue rounded-md h-[55px]"
          />
        </div>
      </div>
      <div
        class="my-[4rem] flex text-white items-center text-sm w-[80%] justify-center"
      >
        <img
          class="w-[30px] h-[30px] mr-[1.5%]"
          src="https://assets.jobstore.com/images/index/icon/icon_user_in.png"
          alt="icon for Jobseeker Sign Up / Sign In"
        />
        <a href="/" class="underline">Sign in</a>
        <span class="mx-1">or</span>
        <a href="/" class="underline">Sign up</a>
        <span class="ml-1">to see your saved jobs on all your devices</span>
      </div>
    </div>
  </div>
  <div class="bg-index-right w-1/4 bg-no-repeat bg-center bg-cover" />
</div>
<MainJob />
<PopularSearches />
