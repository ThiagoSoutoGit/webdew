<template>
  <div class="flex h-full flex-col">
    <div ref="container" class="isolate flex flex-auto flex-col overflow-auto bg-white">
      <div style="width: 165%" class="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
        <div ref="containerNav" class="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
          <div class="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
            <div class="col-end-1 w-14" />
            <div class="flex items-center justify-center py-3">
              <span>Mon</span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span>Tue</span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span class="flex items-baseline">Wed</span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span>Thu</span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span>Fri</span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span>Sat</span>
            </div>
            <div class="flex items-center justify-center py-3">
              <span>Sun</span>
            </div>
          </div>
        </div>
        <div class="flex flex-auto">
          <div class="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
          <div class="grid flex-auto grid-cols-1 grid-rows-1">
            <!-- Horizontal lines -->
            <div class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100" style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))">
              <div ref="containerOffset" class="row-end-1 h-7" />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">12AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">1AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">2AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">3AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">4AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">5AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">6AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">7AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">8AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">9AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">10AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">11AM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">12PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">1PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">2PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">3PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">4PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">5PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">6PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">7PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">8PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">9PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">10PM</div>
              </div>
              <div />
              <div>
                <div class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">11PM</div>
              </div>
              <div />
            </div>

            <!-- Vertical lines -->
            <div class="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
              <div class="col-start-1 row-span-full" />
              <div class="col-start-2 row-span-full" />
              <div class="col-start-3 row-span-full" />
              <div class="col-start-4 row-span-full" />
              <div class="col-start-5 row-span-full" />
              <div class="col-start-6 row-span-full" />
              <div class="col-start-7 row-span-full" />
              <div class="col-start-8 row-span-full w-8" />
            </div>

            <!-- Events -->
            <ol class="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8" style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto">
              <li class="relative mt-px flex sm:col-start-3" style="grid-row: 74 / span 12">
                <a href="#" class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100">
                  <p class="order-1 font-semibold text-blue-700">Breakfast</p>
                  <p class="text-blue-500 group-hover:text-blue-700">
                    <time datetime="2022-01-12T06:00">6:00 AM</time>
                  </p>
                </a>
              </li>
              <li class="relative mt-px flex sm:col-start-3" style="grid-row: 92 / span 30">
                <a href="#" class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100">
                  <p class="order-1 font-semibold text-pink-700">Flight to Paris</p>
                  <p class="text-pink-500 group-hover:text-pink-700">
                    <time datetime="2022-01-12T07:30">7:30 AM</time>
                  </p>
                </a>
              </li>
              <li class="relative mt-px hidden sm:col-start-6 sm:flex" style="grid-row: 122 / span 24">
                <a href="#" class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 hover:bg-gray-200">
                  <p class="order-1 font-semibold text-gray-700">Meeting with design team at Disney</p>
                  <p class="text-gray-500 group-hover:text-gray-700">
                    <time datetime="2022-01-15T10:00">10:00 AM</time>
                  </p>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/vue/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const container = ref(null)
const containerNav = ref(null)
const containerOffset = ref(null)

onMounted(() => {
  // Set the container scroll position based on the current time.
  const currentMinute = new Date().getHours() * 60
  container.value.scrollTop =
      ((container.value.scrollHeight - containerNav.value.offsetHeight - containerOffset.value.offsetHeight) *
          currentMinute) /
      1440
})
</script>