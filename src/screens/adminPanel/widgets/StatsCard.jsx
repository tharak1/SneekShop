import React from 'react'

const StatsCard = (props) => {
  return (
    <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-800 col-span-2 row-span-2">
    <div class="px-4 py-5 sm:p-6">
        <dl>
            <dt class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">{props.name}</dt>
            <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">{props.count}</dd>
        </dl>
    </div>
</div>
  )
}

export default StatsCard
