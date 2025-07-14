### Features
- Header
    - Logo 
    - Hamburger menu (toggles Sidebar)
    - Search bar (Suggestion)
- Sidebar
- Main Container    
    - Filter Buttons
    - Video Container
        - Video Card (Thumbnail, channel name)
- Watch Page
    - Embeded Video
    - Comment Section
    - Live Comment Section (running, user can also send a msg)

### Methods used
- Debouncing
- Caching
- Chunking/ Code-splitting
- Lazy loading
- Shimmer
- Reconciliation

### Debouncing

typing slow = 200ms typing fast = 30ms

### Perfomance:

iphone pro max = 14 letter * 1000 = 140000
with debouncing= 3 API calls * 1000 = 3000
Debouncing with 200ms

if difference between 2 key strokes is <200ms - DECLINE API call
200ms make an API call

### Cache: time complexity tro search in array = O(n) time complexity tro search in Object = O(1)

[i, ip, iph, iphone]

{ i: ip: iph: iphone: }

new Map();

Live chat >>>>>> Infinite scroll >>>>> Pagination
