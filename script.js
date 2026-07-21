const QUESTION_BANK = [
  { id: 1, question: "What is Unity primarily used for?", options: ["Database Management", "Operating System Development", "Game Development", "Web Hosting"], answer: 2 },
  { id: 2, question: "Unity is a ________ engine.", options: ["Database", "Game", "Network", "Browser"], answer: 1 },
  { id: 3, question: "Which programming language is mainly used in Unity?", options: ["Java", "Python", "C#", "C++"], answer: 2 },
  { id: 4, question: "Which window displays all objects in the current scene?", options: ["Project Window", "Console", "Hierarchy", "Inspector"], answer: 2 },
  { id: 5, question: "Which window is used to modify GameObject properties?", options: ["Scene", "Hierarchy", "Inspector", "Console"], answer: 2 },
  { id: 6, question: "Which window stores project assets?", options: ["Hierarchy", "Project", "Scene", "Console"], answer: 1 },
  { id: 7, question: "A GameObject without any components is called a:", options: ["Script", "Empty GameObject", "Material", "Camera"], answer: 1 },
  { id: 8, question: "Which component gives a GameObject its position, rotation, and scale?", options: ["Rigidbody", "Transform", "Collider", "Mesh"], answer: 1 },
  { id: 9, question: "Which view is mainly used to design levels?", options: ["Game View", "Scene View", "Inspector", "Console"], answer: 1 },
  { id: 10, question: "Which view shows what the player sees?", options: ["Scene View", "Inspector", "Game View", "Project View"], answer: 2 },
  { id: 11, question: "What is a Scene in Unity?", options: ["A script", "A game level or environment", "A texture", "A sound"], answer: 1 },
  { id: 12, question: "Which component captures the player's view?", options: ["Audio Source", "Rigidbody", "Camera", "Collider"], answer: 2 },
  { id: 13, question: "Which light illuminates the entire scene like sunlight?", options: ["Point Light", "Spot Light", "Directional Light", "Area Light"], answer: 2 },
  { id: 14, question: "Which light emits light in all directions from one point?", options: ["Point Light", "Spot Light", "Directional Light", "Ambient Light"], answer: 0 },
  { id: 15, question: "Which asset defines the appearance of an object's surface?", options: ["Prefab", "Material", "Mesh", "Script"], answer: 1 },
  { id: 16, question: "A Prefab is:", options: ["A saved reusable GameObject", "A texture", "A camera", "A script"], answer: 0 },
  { id: 17, question: "Which menu is used to create a new Scene?", options: ["File", "Edit", "Window", "Assets"], answer: 0 },
  { id: 18, question: "Which key starts the game in Unity Editor?", options: ["Enter", "Space", "Play Button", "Shift"], answer: 2 },
  { id: 19, question: "Which panel displays compiler errors?", options: ["Scene", "Console", "Hierarchy", "Project"], answer: 1 },
  { id: 20, question: "Which component plays audio?", options: ["Audio Listener", "Audio Source", "Rigidbody", "Animator"], answer: 1 },
  { id: 21, question: "Which component receives audio in Unity?", options: ["Camera", "Audio Listener", "Audio Source", "Canvas"], answer: 1 },
  { id: 22, question: "What is the default parent of all GameObjects?", options: ["Scene", "Camera", "Hierarchy", "Root Object"], answer: 3 },
  { id: 23, question: "Which shortcut duplicates a selected GameObject?", options: ["Ctrl + D", "Ctrl + C", "Ctrl + V", "Ctrl + X"], answer: 0 },
  { id: 24, question: "Which Unity package manages player input?", options: ["Physics Package", "Input System", "UI Toolkit", "Animation Package"], answer: 1 },
  { id: 25, question: "Which UI component displays text?", options: ["Button", "Image", "Text/TextMeshPro", "Slider"], answer: 2 },
  { id: 26, question: "Which UI element responds to user clicks?", options: ["Button", "Panel", "Image", "Canvas"], answer: 0 },
  { id: 27, question: "What is Canvas used for?", options: ["AI", "UI Elements", "Physics", "Animation"], answer: 1 },
  { id: 28, question: "Which component allows physics simulation?", options: ["Rigidbody", "Mesh Renderer", "Audio Source", "Material"], answer: 0 },
  { id: 29, question: "What is the main purpose of a Collider?", options: ["Store textures", "Detect collisions", "Play sound", "Display UI"], answer: 1 },
  { id: 30, question: "Which component is mandatory for physics movement?", options: ["Transform", "Rigidbody", "Animator", "Camera"], answer: 1 },
  { id: 31, question: "Which keyword defines a class in C#?", options: ["object", "class", "struct", "define"], answer: 1 },
  { id: 32, question: "Which method runs once when the object starts?", options: ["Update()", "Start()", "Awake()", "FixedUpdate()"], answer: 1 },
  { id: 33, question: "Which method executes every frame?", options: ["Start()", "Update()", "Awake()", "LateUpdate()"], answer: 1 },
  { id: 34, question: "Which method is mainly used for physics updates?", options: ["Update()", "Start()", "FixedUpdate()", "Awake()"], answer: 2 },
  { id: 35, question: "Which keyword is used to inherit from MonoBehaviour?", options: ["extends", "inherits", ":", "using"], answer: 2 },
  { id: 36, question: "Which namespace is required in almost every Unity script?", options: ["System.IO", "UnityEngine", "UnityEditor", "UnityPhysics"], answer: 1 },
  { id: 37, question: "Which symbol ends a C# statement?", options: [":", ";", ".", ","], answer: 1 },
  { id: 38, question: "Which function creates a new GameObject during runtime?", options: ["Create()", "Instantiate()", "Spawn()", "Generate()"], answer: 1 },
  { id: 39, question: "Which function removes a GameObject?", options: ["Delete()", "Destroy()", "Remove()", "Erase()"], answer: 1 },
  { id: 40, question: "Which method checks keyboard input?", options: ["Input.GetKey()", "Mouse.Click()", "Keyboard.Read()", "KeyPress()"], answer: 0 },
  { id: 41, question: "Which method detects a key press only once?", options: ["GetKey()", "GetKeyDown()", "GetAxis()", "GetMouse()"], answer: 1 },
  { id: 42, question: "Which method detects continuous key holding?", options: ["GetKey()", "GetKeyDown()", "GetButtonDown()", "GetAxisRaw()"], answer: 0 },
  { id: 43, question: "Which function is commonly used to spawn enemies repeatedly?", options: ["Update()", "Instantiate()", "InvokeRepeating()", "Destroy()"], answer: 2 },
  { id: 44, question: "Which variable type stores decimal values?", options: ["int", "bool", "float", "char"], answer: 2 },
  { id: 45, question: "Which variable type stores True or False?", options: ["int", "bool", "string", "float"], answer: 1 },
  { id: 46, question: "Which component controls animations?", options: ["Audio Source", "Animator", "Collider", "Rigidbody"], answer: 1 },
  { id: 47, question: "Which event function is called when a trigger is entered?", options: ["OnCollisionEnter()", "OnTriggerEnter()", "OnTriggerStay()", "OnTriggerExit()"], answer: 1 },
  { id: 48, question: "Which component is used to add background music?", options: ["Audio Source", "Camera", "Material", "Canvas"], answer: 0 },
  { id: 49, question: "Which Unity feature helps identify coding errors?", options: ["Hierarchy", "Console", "Game View", "Scene View"], answer: 1 },
  { id: 50, question: "Which of the following is the best practice before publishing a game?", options: ["Ignore bugs", "Delete scripts", "Perform testing and debugging", "Remove UI"], answer: 2 },
  { id: 51, question: "Which method is commonly used to increase a player's score?", options: ["AddScore()", "score++", "ScorePlayer()", "Increase()"], answer: 1 },
  { id: 52, question: "Which Unity function delays the execution of a method?", options: ["Wait()", "Delay()", "Invoke()", "Pause()"], answer: 2 },
  { id: 53, question: "Which function repeatedly calls a method after a specified time interval?", options: ["Repeat()", "InvokeRepeating()", "Loop()", "Start()"], answer: 1 },
  { id: 54, question: "Which component is responsible for rendering a 2D image?", options: ["Sprite Renderer", "Mesh Renderer", "Canvas Renderer", "Image Renderer"], answer: 0 },
  { id: 55, question: "Which file format is commonly used for 2D sprites?", options: ["PNG", "DOCX", "MP3", "EXE"], answer: 0 },
  { id: 56, question: "Which Unity component controls the movement of a 2D physics object?", options: ["Rigidbody", "Rigidbody2D", "Collider", "Mesh Filter"], answer: 1 },
  { id: 57, question: "Which collider is mainly used for rectangular 2D objects?", options: ["Sphere Collider", "Capsule Collider", "Box Collider 2D", "Mesh Collider"], answer: 2 },
  { id: 58, question: "Which collider is suitable for circular 2D objects?", options: ["Circle Collider 2D", "Box Collider", "Capsule Collider", "Mesh Collider"], answer: 0 },
  { id: 59, question: "Which property controls the speed of a Rigidbody2D?", options: ["Position", "Velocity", "Rotation", "Scale"], answer: 1 },
  { id: 60, question: "Which function is used to detect mouse clicks?", options: ["Input.GetMouseButtonDown()", "Mouse.Click()", "Mouse.Input()", "Click()"], answer: 0 },
  { id: 61, question: "Which loop executes while a condition is true?", options: ["if", "while", "switch", "break"], answer: 1 },
  { id: 62, question: "Which statement is used for multiple decision making?", options: ["while", "for", "switch", "continue"], answer: 2 },
  { id: 63, question: "Which keyword exits a loop immediately?", options: ["stop", "break", "end", "return"], answer: 1 },
  { id: 64, question: "Which keyword skips the current iteration of a loop?", options: ["continue", "break", "stop", "skip"], answer: 0 },
  { id: 65, question: "Which variable type stores text?", options: ["float", "bool", "string", "int"], answer: 2 },
  { id: 66, question: "Which variable type stores whole numbers?", options: ["string", "int", "bool", "float"], answer: 1 },
  { id: 67, question: "Which keyword creates an object from a class?", options: ["object", "class", "new", "make"], answer: 2 },
  { id: 68, question: "Which access modifier allows a variable to be seen in the Inspector?", options: ["private", "protected", "public", "internal"], answer: 2 },
  { id: 69, question: "Which symbol is used to access members of an object?", options: [".", ":", ";", "#"], answer: 0 },
  { id: 70, question: "Which method prints messages to the Unity Console?", options: ["Console.Write()", "Debug.Log()", "Print()", "Output()"], answer: 1 },
  { id: 71, question: "Which Unity feature is mainly used to create large 2D maps?", options: ["Tilemap", "Canvas", "Material", "Terrain"], answer: 0 },
  { id: 72, question: "A Tile Palette is used to:", options: ["Play sounds", "Paint tiles onto a Tilemap", "Create animations", "Write scripts"], answer: 1 },
  { id: 73, question: "Which Grid layout is commonly used in 2D platformer games?", options: ["Rectangular Grid", "Hexagonal Grid", "Isometric Grid", "Polar Grid"], answer: 0 },
  { id: 74, question: "Which component stores the visual tiles in Unity?", options: ["Tile Renderer", "Tilemap Renderer", "Sprite Renderer", "Mesh Renderer"], answer: 1 },
  { id: 75, question: "Which object usually follows the player?", options: ["Enemy", "Camera", "Canvas", "Audio Source"], answer: 1 },
  { id: 76, question: "Which input is generally used for jumping?", options: ["Left Mouse Button", "Spacebar", "Shift", "Escape"], answer: 1 },
  { id: 77, question: "Which force direction is applied when a player jumps?", options: ["Downward", "Upward", "Left", "Right"], answer: 1 },
  { id: 78, question: "Which physics property causes objects to fall?", options: ["Scale", "Gravity", "Rotation", "Opacity"], answer: 1 },
  { id: 79, question: "Which component is commonly attached to the player for smooth movement?", options: ["Rigidbody2D", "Material", "Audio Source", "Canvas"], answer: 0 },
  { id: 80, question: "Which collider is best for a human-shaped character?", options: ["Circle Collider", "Capsule Collider 2D", "Box Collider", "Mesh Collider"], answer: 1 },
  { id: 81, question: "Which method is commonly used to detect whether the player is on the ground?", options: ["GroundCheck", "Raycast", "Instantiate", "Destroy"], answer: 1 },
  { id: 82, question: "Enemy AI in a platformer commonly performs:", options: ["Random painting", "Patrol and chase", "Database updates", "Audio compression"], answer: 1 },
  { id: 83, question: "Which feature allows enemies to move between two points?", options: ["Patrol System", "UI Manager", "Audio Mixer", "Material Editor"], answer: 0 },
  { id: 84, question: "Which Unity feature helps organize multiple game objects?", options: ["Hierarchy", "Console", "Project", "Package Manager"], answer: 0 },
  { id: 85, question: "Which component displays the player's health bar?", options: ["Canvas", "Rigidbody", "Collider", "Light"], answer: 0 },
  { id: 86, question: "Which UI element is commonly used as a health bar?", options: ["Slider", "Button", "Toggle", "Dropdown"], answer: 0 },
  { id: 87, question: "Which storytelling method presents the story while the player is playing?", options: ["Gameplay Narrative", "Static Image", "Documentation", "Source Code"], answer: 0 },
  { id: 88, question: "Which of the following improves player immersion?", options: ["Good storytelling", "Compiler errors", "Slow frame rate", "Broken controls"], answer: 0 },
  { id: 89, question: "Which process adjusts a game's difficulty?", options: ["Balancing", "Rendering", "Importing", "Installing"], answer: 0 },
  { id: 90, question: "Which testing method involves players trying the game before release?", options: ["Playtesting", "Compiling", "Debugging", "Rendering"], answer: 0 },
  { id: 91, question: "Which UI screen usually appears before gameplay begins?", options: ["Main Menu", "Credits", "Console", "Inspector"], answer: 0 },
  { id: 92, question: "Which feature allows restarting the current level?", options: ["Reload Scene", "Destroy Object", "Quit Game", "Pause Audio"], answer: 0 },
  { id: 93, question: "Which Unity namespace provides Scene management?", options: ["UnityEngine.SceneManagement", "Unity.Scene", "SceneManager", "UnityEditor.Scene"], answer: 0 },
  { id: 94, question: "Which function loads another scene?", options: ["SceneManager.LoadScene()", "OpenScene()", "ChangeScene()", "NextScene()"], answer: 0 },
  { id: 95, question: "Which object should not be destroyed when changing scenes?", options: ["Temporary Enemy", "Player Bullet", "Game Manager", "Explosion Effect"], answer: 2 },
  { id: 96, question: "Which Unity function keeps an object across scene changes?", options: ["DontDestroyOnLoad()", "KeepAlive()", "StayAlive()", "Preserve()"], answer: 0 },
  { id: 97, question: "Which gameplay element motivates players to continue playing?", options: ["Rewards", "Errors", "Bugs", "Crashes"], answer: 0 },
  { id: 98, question: "Which factor most improves a platformer's responsiveness?", options: ["Accurate player controls", "Larger textures", "More lights", "Bigger file size"], answer: 0 },
  { id: 99, question: "Which design principle helps players understand game objectives?", options: ["Clear level design", "Random placement", "Hidden controls", "Complex menus"], answer: 0 },
  { id: 100, question: "Which of the following is the final step before releasing a game?", options: ["Remove all scripts", "Skip testing", "Final testing and bug fixing", "Delete assets"], answer: 2 },
  { id: 101, question: "What is the primary purpose of AI in games?", options: ["Increase file size", "Control non-player characters (NPCs)", "Improve graphics only", "Reduce memory usage"], answer: 1 },
  { id: 102, question: "NPC stands for:", options: ["Network Processing Controller", "Non-Playable Character", "Non-Player Character", "New Player Controller"], answer: 2 },
  { id: 103, question: "Which Unity system is commonly used for enemy navigation?", options: ["Tilemap", "NavMesh", "Canvas", "Animator"], answer: 1 },
  { id: 104, question: "Which component allows an AI character to move using NavMesh?", options: ["NavMesh Agent", "Rigidbody", "Sprite Renderer", "Audio Source"], answer: 0 },
  { id: 105, question: "What is the function of a NavMesh?", options: ["Stores UI", "Defines walkable areas for AI", "Plays audio", "Creates textures"], answer: 1 },
  { id: 106, question: "Which method assigns a destination to a NavMesh Agent?", options: ["SetDestination()", "Move()", "GoTo()", "Translate()"], answer: 0 },
  { id: 107, question: "Which behavior causes an enemy to move toward the player?", options: ["Patrol", "Chase", "Idle", "Sleep"], answer: 1 },
  { id: 108, question: "Which behavior causes an enemy to remain in one place?", options: ["Idle", "Chase", "Attack", "Patrol"], answer: 0 },
  { id: 109, question: "Which behavior makes an enemy move between predefined points?", options: ["Patrol", "Jump", "Attack", "Hide"], answer: 0 },
  { id: 110, question: "Which Unity feature is used to detect if a player is within range?", options: ["Trigger Collider", "Material", "Canvas", "Mesh Filter"], answer: 0 },
  { id: 111, question: "Which method is called when a trigger is entered?", options: ["OnTriggerEnter()", "OnCollisionStay()", "OnMouseOver()", "Awake()"], answer: 0 },
  { id: 112, question: "Which event is triggered during continuous collision?", options: ["OnCollisionStay()", "OnTriggerExit()", "Start()", "Update()"], answer: 0 },
  { id: 113, question: "Which variable is commonly used to store player health?", options: ["bool", "string", "int", "char"], answer: 2 },
  { id: 114, question: "Which operation decreases health?", options: ["health++", "health--", "health += 10", "health *= 2"], answer: 1 },
  { id: 115, question: "Which UI element is commonly used to display health?", options: ["Slider", "Button", "Dropdown", "Toggle"], answer: 0 },
  { id: 116, question: "Which object usually restores player health?", options: ["Health Pack", "Enemy", "Wall", "Bullet"], answer: 0 },
  { id: 117, question: "Which method destroys an enemy after its health reaches zero?", options: ["Destroy()", "Delete()", "Remove()", "End()"], answer: 0 },
  { id: 118, question: "What is a checkpoint used for?", options: ["Store textures", "Save player progress", "Play sounds", "Import assets"], answer: 1 },
  { id: 119, question: "What happens when the player dies after reaching a checkpoint?", options: ["Game closes", "Player respawns at the checkpoint", "Scene is deleted", "Score resets permanently"], answer: 1 },
  { id: 120, question: "Which feature stores player progress permanently?", options: ["Save System", "Animation", "Tilemap", "Sprite Renderer"], answer: 0 },
  { id: 121, question: "Which Unity class is commonly used for simple game data storage?", options: ["PlayerPrefs", "Rigidbody", "Animator", "Collider"], answer: 0 },
  { id: 122, question: "Which PlayerPrefs method stores an integer value?", options: ["SetInt()", "SaveInt()", "AddInt()", "StoreInt()"], answer: 0 },
  { id: 123, question: "Which PlayerPrefs method retrieves an integer?", options: ["GetInt()", "ReadInt()", "LoadInt()", "FetchInt()"], answer: 0 },
  { id: 124, question: "Which function saves PlayerPrefs to disk?", options: ["PlayerPrefs.Save()", "SaveFile()", "Commit()", "Store()"], answer: 0 },
  { id: 125, question: "What is the purpose of collectibles in games?", options: ["Increase player engagement", "Reduce FPS", "Delete objects", "Create errors"], answer: 0 },
  { id: 126, question: "Which item is commonly collected in platformer games?", options: ["Coins", "Errors", "Scripts", "Cameras"], answer: 0 },
  { id: 127, question: "Which variable is commonly used to store collected coins?", options: ["coinCount", "playerName", "gameSpeed", "gravity"], answer: 0 },
  { id: 128, question: "Which event usually increases the score?", options: ["Collecting an item", "Closing the game", "Loading a scene", "Opening the Inspector"], answer: 0 },
  { id: 129, question: "Which Unity method is useful for random enemy spawning?", options: ["Random.Range()", "InstantiateAll()", "SpawnRandom()", "CreateEnemy()"], answer: 0 },
  { id: 130, question: "Which Random.Range() overload returns whole numbers?", options: ["int", "float", "string", "bool"], answer: 0 },
  { id: 131, question: "Which object is usually responsible for spawning enemies?", options: ["Enemy Spawner", "Camera", "Canvas", "Audio Source"], answer: 0 },
  { id: 132, question: "Which scripting concept helps organize reusable functionality?", options: ["Functions (Methods)", "Comments", "Variables", "Constants"], answer: 0 },
  { id: 133, question: "Which programming concept hides implementation details?", options: ["Encapsulation", "Compilation", "Rendering", "Lighting"], answer: 0 },
  { id: 134, question: "Which OOP concept allows one class to inherit another?", options: ["Inheritance", "Polymorphism", "Abstraction", "Overloading"], answer: 0 },
  { id: 135, question: "Which OOP concept allows methods with the same name but different behavior?", options: ["Polymorphism", "Variables", "Arrays", "Interfaces"], answer: 0 },
  { id: 136, question: "Which feature makes game development easier by reusing code?", options: ["Methods", "Comments", "Console", "Lighting"], answer: 0 },
  { id: 137, question: "Which component is commonly used to animate doors opening?", options: ["Animator", "Rigidbody", "Camera", "Audio Listener"], answer: 0 },
  { id: 138, question: "Which animation transition occurs after pressing an interaction key?", options: ["Idle → Open", "Run → Walk", "Jump → Fall", "Shoot → Reload"], answer: 0 },
  { id: 139, question: "Which camera effect improves cinematic gameplay?", options: ["Smooth Camera Transition", "Instant Teleport", "Hidden Camera", "No Camera"], answer: 0 },
  { id: 140, question: "Which feature is commonly used in cutscenes?", options: ["Camera Animation", "Tilemap", "Grid Layout", "Package Manager"], answer: 0 },
  { id: 141, question: "What is the purpose of a cutscene?", options: ["Advance the story", "Delete the player", "Reduce performance", "Remove UI"], answer: 0 },
  { id: 142, question: "Which element is most important in storytelling?", options: ["Narrative", "Compiler", "Lighting only", "Textures only"], answer: 0 },
  { id: 143, question: "Which factor most improves player immersion?", options: ["Sound, visuals, and story", "Random bugs", "Long loading times", "Missing textures"], answer: 0 },
  { id: 144, question: "Which process improves game quality after development?", options: ["Polishing", "Deleting assets", "Ignoring bugs", "Skipping testing"], answer: 0 },
  { id: 145, question: "Which process removes unnecessary performance issues?", options: ["Optimization", "Animation", "Rendering", "Installation"], answer: 0 },
  { id: 146, question: "Which metric is commonly used to measure game smoothness?", options: ["FPS (Frames Per Second)", "CPU Clock", "RAM Size", "Screen Width"], answer: 0 },
  { id: 147, question: "Which FPS value is generally considered smooth gameplay?", options: ["60 FPS", "5 FPS", "10 FPS", "15 FPS"], answer: 0 },
  { id: 148, question: "Which Unity Profiler feature helps identify performance bottlenecks?", options: ["Profiler Window", "Inspector", "Hierarchy", "Project Browser"], answer: 0 },
  { id: 149, question: "Which practice improves game performance?", options: ["Optimize assets and scripts", "Add unnecessary GameObjects", "Increase polygon count everywhere", "Ignore optimization"], answer: 0 },
  { id: 150, question: "Which statement best describes advanced game design?", options: ["It combines gameplay, AI, UI, optimization, storytelling, and player experience into a polished game.", "It only focuses on graphics.", "It only involves writing scripts.", "It only involves creating animations."], answer: 0 },
  { id: 151, question: "In Unity, why is FixedUpdate() preferred over Update() for applying physics forces?", options: ["It executes before Awake()", "It executes at a fixed time interval synchronized with the physics engine", "It executes only once", "It consumes less memory"], answer: 1 },
  { id: 152, question: "Which component combination is mandatory for an object to respond realistically to gravity and collisions?", options: ["Transform + Camera", "Rigidbody + Collider", "Sprite Renderer + Animator", "Canvas + Image"], answer: 1 },
  { id: 153, question: "A player walks through a coin without collecting it. The coin has a Box Collider but nothing happens. What is the most likely reason?", options: ["The player is too fast.", "The collider is too small.", "The coin's collider is not marked as Is Trigger, or the required trigger event is missing.", "The material is transparent."], answer: 2 },
  { id: 154, question: "Which statement best differentiates Awake() and Start()?", options: ["Both execute every frame.", "Awake() is called when the object is initialized, while Start() runs just before the first frame if the object is enabled.", "Start() executes before Awake().", "There is no difference."], answer: 1 },
  { id: 155, question: "Which design pattern is commonly used to ensure only one Game Manager exists during gameplay?", options: ["Factory Pattern", "Observer Pattern", "Singleton Pattern", "Adapter Pattern"], answer: 2 },
  { id: 156, question: "What is the main purpose of using Prefabs in Unity?", options: ["To increase polygon count", "To create reusable GameObject templates", "To replace scripts", "To store textures only"], answer: 1 },
  { id: 157, question: "If a Prefab is modified, what happens to all instances that have not overridden those properties?", options: ["Nothing changes.", "They automatically inherit the Prefab changes.", "They are deleted.", "They become independent objects."], answer: 1 },
  { id: 158, question: "Which Unity feature allows AI characters to navigate around obstacles automatically?", options: ["Tile Palette", "NavMesh", "Rigidbody", "Terrain Collider"], answer: 1 },
  { id: 159, question: "Which NavMesh Agent property controls how quickly an enemy changes its direction?", options: ["Radius", "Speed", "Angular Speed", "Height"], answer: 2 },
  { id: 160, question: "During optimization, which practice generally provides the greatest improvement in rendering performance?", options: ["Increasing texture resolution", "Reducing draw calls", "Adding more scripts", "Increasing physics calculations"], answer: 1 },
  { id: 161, question: "Which collider should generally be avoided on moving objects because of its high computational cost?", options: ["Sphere Collider", "Capsule Collider", "Mesh Collider (Non-Convex)", "Box Collider"], answer: 2 },
  { id: 162, question: "Which of the following is an advantage of Object Pooling?", options: ["Increases garbage collection", "Frequently creates and destroys objects", "Reuses objects instead of instantiating repeatedly", "Reduces frame rate"], answer: 2 },
  { id: 163, question: "Which Unity method is more efficient than repeatedly calling Instantiate() for bullets?", options: ["Destroy()", "Object Pooling", "Awake()", "Update()"], answer: 1 },
  { id: 164, question: "A developer notices frame drops whenever enemies spawn. What is the most appropriate optimization technique?", options: ["Use larger textures", "Implement Object Pooling", "Increase enemy count", "Add more lighting"], answer: 1 },
  { id: 165, question: "Which Unity Profiler module helps identify excessive script execution time?", options: ["Rendering", "CPU Usage", "Physics", "Audio"], answer: 1 },
  { id: 166, question: "Which statement about Raycasting is TRUE?", options: ["It physically creates a bullet.", "It detects objects along a line without creating a projectile.", "It only works in 2D.", "It replaces Rigidbody."], answer: 1 },
  { id: 167, question: "In an FPS game, Raycasting is primarily used for:", options: ["Character animation", "Instant-hit weapon detection", "Audio playback", "UI rendering"], answer: 1 },
  { id: 168, question: "Which lighting method consumes the least runtime processing?", options: ["Realtime Lighting", "Mixed Lighting", "Baked Lighting", "Dynamic GI"], answer: 2 },
  { id: 169, question: "Which feature should be used when lighting rarely changes during gameplay?", options: ["Dynamic Lighting", "Baked Lighting", "Flashlights", "Particle Systems"], answer: 1 },
  { id: 170, question: "Which optimization technique reduces unnecessary rendering of objects outside the camera's view?", options: ["Mesh Combining", "Occlusion Culling", "Texture Compression", "Baking"], answer: 1 },
  { id: 171, question: "Why is Layer Masking commonly used with Raycasting?", options: ["To increase FPS automatically", "To limit collision detection to selected objects", "To improve animation", "To replace colliders"], answer: 1 },
  { id: 172, question: "Which data structure is best suited for storing a player's inventory?", options: ["Queue", "Stack", "List", "Boolean"], answer: 2 },
  { id: 173, question: "What is the primary advantage of Scriptable Objects?", options: ["Replace GameObjects", "Store reusable game data independently of scenes", "Replace Colliders", "Improve graphics"], answer: 1 },
  { id: 174, question: "Which programming principle improves code readability and maintenance?", options: ["Long methods", "Single Responsibility Principle", "Global variables everywhere", "Copy-paste programming"], answer: 1 },
  { id: 175, question: "What happens if Time.timeScale is set to 0?", options: ["The game speeds up.", "Physics and gameplay pause.", "Lighting stops permanently.", "Scripts stop compiling."], answer: 1 },
  { id: 176, question: "Which Unity class is commonly used for asynchronous scene loading?", options: ["AsyncOperation", "SceneLoader", "LoadManager", "BackgroundThread"], answer: 0 },
  { id: 177, question: "Why is asynchronous scene loading preferred?", options: ["Reduces build size", "Prevents freezing during scene transitions", "Improves lighting", "Removes loading screens"], answer: 1 },
  { id: 178, question: "Which GameObject should generally use DontDestroyOnLoad()?", options: ["Temporary bullets", "Main Camera", "Game Manager", "Enemies"], answer: 2 },
  { id: 179, question: "What is the purpose of a Finite State Machine (FSM) in game AI?", options: ["Compress textures", "Manage different AI behaviors logically", "Improve lighting", "Animate UI"], answer: 1 },
  { id: 180, question: "Which of these is NOT typically an AI state?", options: ["Patrol", "Chase", "Attack", "Compile"], answer: 3 },
  { id: 181, question: "What is the biggest advantage of Event-Driven programming compared to continuous polling?", options: ["Uses more CPU", "Executes only when required", "Slows the game", "Increases memory usage"], answer: 1 },
  { id: 182, question: "Which Unity event is triggered when two non-trigger colliders collide?", options: ["OnTriggerEnter()", "OnCollisionEnter()", "OnMouseDown()", "Awake()"], answer: 1 },
  { id: 183, question: "Which Animator parameter type is most suitable for triggering a jump animation?", options: ["Float", "Integer", "Trigger", "Boolean"], answer: 2 },
  { id: 184, question: "Which Animator parameter is ideal for controlling Idle → Walk → Run transitions?", options: ["Trigger", "Float (Speed)", "Boolean", "String"], answer: 1 },
  { id: 185, question: "Which Unity feature blends multiple animations smoothly?", options: ["Animation Events", "Blend Trees", "Prefabs", "Tilemaps"], answer: 1 },
  { id: 186, question: "Which principle helps avoid repeated code throughout a project?", options: ["DRY (Don't Repeat Yourself)", "WYSIWYG", "FIFO", "MVC"], answer: 0 },
  { id: 187, question: "Which performance issue commonly results from excessive use of FindObjectOfType() inside Update()?", options: ["Better FPS", "High CPU usage", "Better rendering", "Reduced memory"], answer: 1 },
  { id: 188, question: "Which Unity function is generally more expensive?", options: ["Accessing a cached reference", "GameObject.Find()", "Using Transform directly", "Reading a variable"], answer: 1 },
  { id: 189, question: "Which optimization technique reduces repeated component lookups?", options: ["Caching references", "More Debug.Log()", "More Update() methods", "Larger textures"], answer: 0 },
  { id: 190, question: "Which debugging tool displays runtime variable values?", options: ["Console using Debug.Log()", "Asset Store", "Tile Palette", "Package Manager"], answer: 0 },
  { id: 191, question: "Which software engineering practice should be performed before every major release?", options: ["Code review and testing", "Delete backups", "Remove comments only", "Rename scripts"], answer: 0 },
  { id: 192, question: "What is regression testing?", options: ["Testing graphics only", "Ensuring previous features still work after modifications", "Removing scripts", "Compressing textures"], answer: 1 },
  { id: 193, question: "Which factor contributes most to a positive player experience?", options: ["Balanced gameplay", "High polygon count only", "Large executable size", "Many menus"], answer: 0 },
  { id: 194, question: "Which principle ensures players immediately understand controls?", options: ["Good UX Design", "Complex UI", "Hidden instructions", "Random controls"], answer: 0 },
  { id: 195, question: "Which of the following is considered procedural content generation?", options: ["Random dungeon generation", "Manual level design", "Fixed menu creation", "Static textures"], answer: 0 },
  { id: 196, question: "Which gameplay mechanic increases replayability?", options: ["Randomized enemy placement", "Fixed path every time", "No collectibles", "No difficulty settings"], answer: 0 },
  { id: 197, question: "Which Unity package is primarily used for creating cinematic cutscenes?", options: ["Timeline", "NavMesh", "Tilemap", "Physics"], answer: 0 },
  { id: 198, question: "Which Unity component works together with Timeline for cinematic sequences?", options: ["Playable Director", "Mesh Renderer", "Rigidbody", "Audio Listener"], answer: 0 },
  { id: 199, question: "Which metric is the best overall indicator of whether a game is optimized?", options: ["Build size", "Stable frame rate with low CPU/GPU spikes", "Number of scripts", "Number of scenes"], answer: 1 },
  { id: 200, question: "A well-designed Unity project should primarily emphasize:", options: ["Maintainability, scalability, optimization, and player experience", "Maximum file size", "Thousands of scripts in one folder", "Only graphical quality"], answer: 0 },
  { id: 201, question: "Consider the following code: void Update() { transform.Translate(Vector3.forward * 5 * Time.deltaTime); } What is the purpose of Time.deltaTime?", options: ["Makes movement frame-rate dependent", "Makes movement independent of frame rate", "Doubles movement speed", "Stops object movement"], answer: 1 },
  { id: 202, question: "What will happen if Time.deltaTime is removed from the previous code?", options: ["Movement remains identical", "Movement depends on the frame rate", "Object disappears", "Compile-time error"], answer: 1 },
  { id: 203, question: "Which code correctly moves a Rigidbody using physics?", options: ["transform.position += Vector3.forward;", "rb.AddForce(Vector3.forward * force);", "transform.Translate(Vector3.forward);", "gameObject.Move();"], answer: 1 },
  { id: 204, question: "Why is directly modifying transform.position discouraged for physics-controlled objects?", options: ["It changes textures", "It bypasses the physics engine", "It increases memory", "It deletes collisions"], answer: 1 },
  { id: 205, question: "Which Unity callback executes first?", options: ["Start()", "Update()", "Awake()", "FixedUpdate()"], answer: 2 },
  { id: 206, question: "Which callback is executed exactly once before the first frame update?", options: ["LateUpdate()", "Start()", "OnDestroy()", "OnCollisionEnter()"], answer: 1 },
  { id: 207, question: "Consider: int score = 5; score += 10; Final value of score?", options: ["5", "10", "15", "20"], answer: 2 },
  { id: 208, question: "Which statement is FALSE about Prefabs?", options: ["They improve reusability.", "Editing the Prefab updates linked instances.", "Prefabs reduce duplication.", "Prefabs cannot contain scripts."], answer: 3 },
  { id: 209, question: "Which Unity API loads another scene?", options: ["SceneManager.LoadScene()", "Application.NextScene()", "Scene.Load()", "Unity.LoadScene()"], answer: 0 },
  { id: 210, question: "Which namespace contains SceneManager?", options: ["UnityEngine.SceneManagement", "Unity.Scene", "UnityEditor", "UnityEngine.Physics"], answer: 0 },
  { id: 211, question: "A NavMesh Agent refuses to move. Which is the MOST likely reason?", options: ["No Rigidbody", "NavMesh has not been baked", "Object is blue", "Camera missing"], answer: 1 },
  { id: 212, question: "Which NavMesh component computes paths automatically?", options: ["NavMeshAgent", "MeshRenderer", "CharacterController", "Rigidbody"], answer: 0 },
  { id: 213, question: "What is the purpose of SetDestination()?", options: ["Rotates an enemy", "Changes animation", "Assigns a target position", "Changes texture"], answer: 2 },
  { id: 214, question: "Which algorithm is commonly used internally for shortest pathfinding?", options: ["Bubble Sort", "A* (A-Star)", "Binary Search", "Merge Sort"], answer: 1 },
  { id: 215, question: "Which AI model is BEST suited for Patrol → Chase → Attack transitions?", options: ["Linked List", "Finite State Machine", "Queue", "Binary Tree"], answer: 1 },
  { id: 216, question: "Which collider produces the MOST accurate collision detection for complex static terrain?", options: ["Box Collider", "Sphere Collider", "Mesh Collider", "Capsule Collider"], answer: 2 },
  { id: 217, question: "Which collider generally provides the BEST performance?", options: ["Mesh Collider", "Box Collider", "Terrain Collider", "Wheel Collider"], answer: 1 },
  { id: 218, question: "What is the main drawback of Mesh Colliders?", options: ["Poor rendering", "High computational cost", "No collision support", "Cannot detect triggers"], answer: 1 },
  { id: 219, question: "Which command applies an impulse force?", options: ["rb.AddForce(force, ForceMode.Impulse);", "transform.Translate()", "transform.Rotate()", "Instantiate()"], answer: 0 },
  { id: 220, question: "Which ForceMode simulates an explosion?", options: ["Force", "Velocity", "Impulse", "Rotation"], answer: 2 },
  { id: 221, question: "Which optimization technique reduces memory allocations?", options: ["Object Pooling", "More Instantiate()", "Larger textures", "More GameObjects"], answer: 0 },
  { id: 222, question: "Which function creates unnecessary garbage if overused?", options: ["Instantiate()", "Destroy()", "Both A and B", "Neither"], answer: 2 },
  { id: 223, question: "What causes Garbage Collection spikes?", options: ["Frequent memory allocation and deallocation", "Lighting", "Cameras", "Terrain"], answer: 0 },
  { id: 224, question: "Which profiler module detects memory allocations?", options: ["CPU Usage", "Memory", "Animation", "Rendering"], answer: 1 },
  { id: 225, question: "Which Unity Profiler graph identifies rendering bottlenecks?", options: ["GPU Usage", "Audio", "Timeline", "Inspector"], answer: 0 },
  { id: 226, question: "Which rendering optimization combines nearby meshes?", options: ["Mesh Combining", "Animator", "Tilemap", "Rigidbody"], answer: 0 },
  { id: 227, question: "Static Batching works ONLY on:", options: ["Moving objects", "Static objects", "Animated objects", "Cameras"], answer: 1 },
  { id: 228, question: "Dynamic Batching is mainly intended for:", options: ["Small moving objects", "Terrain", "UI", "Audio"], answer: 0 },
  { id: 229, question: "Which setting reduces texture memory?", options: ["Texture Compression", "Anti-Aliasing", "Shadows", "VSync"], answer: 0 },
  { id: 230, question: "Which rendering technique skips hidden objects?", options: ["Occlusion Culling", "Texture Mapping", "UV Mapping", "Animation Blending"], answer: 0 },
  { id: 231, question: "Which script execution order is correct?", options: ["Awake → Start → Update", "Start → Awake → Update", "Update → Awake → Start", "FixedUpdate → Awake → Start"], answer: 0 },
  { id: 232, question: "Which callback is synchronized with the physics engine?", options: ["Update()", "FixedUpdate()", "LateUpdate()", "Awake()"], answer: 1 },
  { id: 233, question: "Which callback executes after Update()?", options: ["FixedUpdate()", "Start()", "LateUpdate()", "OnDestroy()"], answer: 2 },
  { id: 234, question: "Which callback is useful for camera-follow scripts?", options: ["Awake()", "LateUpdate()", "Start()", "FixedUpdate()"], answer: 1 },
  { id: 235, question: "Why should expensive calculations NOT be placed inside Update() unnecessarily?", options: ["They increase CPU usage every frame", "They reduce lighting", "They improve FPS", "They affect textures"], answer: 0 },
  { id: 236, question: "Which keyword prevents another class from inheriting a class?", options: ["sealed", "static", "virtual", "override"], answer: 0 },
  { id: 237, question: "Which keyword allows a derived class to modify a base method?", options: ["private", "override", "const", "readonly"], answer: 1 },
  { id: 238, question: "Which keyword marks a method that can be overridden?", options: ["abstract", "virtual", "static", "interface"], answer: 1 },
  { id: 239, question: "Which OOP principle enables runtime method selection?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], answer: 1 },
  { id: 240, question: "Which design principle encourages program to interfaces, not implementations?", options: ["SOLID", "MVC", "FIFO", "LIFO"], answer: 0 },
  { id: 241, question: "Which SOLID principle states that a class should have only one reason to change?", options: ["SRP", "OCP", "ISP", "DIP"], answer: 0 },
  { id: 242, question: "Which debugging technique is MOST effective for intermittent bugs?", options: ["Random guessing", "Logging + breakpoints + reproducible test cases", "Restarting the PC", "Deleting scripts"], answer: 1 },
  { id: 243, question: "Which Unity feature allows breakpoints while debugging C# code?", options: ["Visual Studio Debugger", "Package Manager", "Timeline", "Asset Store"], answer: 0 },
  { id: 244, question: "Which testing type verifies the interaction between multiple game systems?", options: ["Unit Testing", "Integration Testing", "Alpha Testing", "Smoke Testing"], answer: 1 },
  { id: 245, question: "Which testing phase is usually performed by internal developers?", options: ["Alpha Testing", "Beta Testing", "Acceptance Testing", "User Testing"], answer: 0 },
  { id: 246, question: "Which testing phase is performed by selected external users?", options: ["Unit Testing", "Beta Testing", "Integration Testing", "Static Testing"], answer: 1 },
  { id: 247, question: "Which factor MOST affects player retention?", options: ["Engaging gameplay loop", "Maximum polygon count", "Largest executable", "Long loading screens"], answer: 0 },
  { id: 248, question: "Which metric indicates that optimization has been successful?", options: ["Stable frame rate and low CPU/GPU spikes", "Increased build size", "More scripts", "More GameObjects"], answer: 0 },
  { id: 249, question: "Which statement BEST defines a polished Unity game?", options: ["High graphics only", "Balanced gameplay, optimized performance, intuitive UI, bug-free mechanics", "Many scripts", "Large textures"], answer: 1 },
  { id: 250, question: "Which of the following represents the best overall development workflow for a professional Unity project?", options: ["Design → Prototype → Develop → Test → Optimize → Deploy → Maintain", "Code → Release", "Design → Release", "Prototype → Delete → Release"], answer: 0 },
  { id: 251, question: "Consider the following code: void Update() { transform.Translate(Vector3.forward * 5 * Time.deltaTime); } What is the purpose of Time.deltaTime?", options: ["Makes movement frame-rate dependent", "Makes movement independent of frame rate", "Doubles movement speed", "Stops object movement"], answer: 1 },
  { id: 252, question: "What will happen if Time.deltaTime is removed from the previous code?", options: ["Movement remains identical", "Movement depends on the frame rate", "Object disappears", "Compile-time error"], answer: 1 },
  { id: 253, question: "Which code correctly moves a Rigidbody using physics?", options: ["transform.position += Vector3.forward;", "rb.AddForce(Vector3.forward * force);", "transform.Translate(Vector3.forward);", "gameObject.Move();"], answer: 1 },
  { id: 254, question: "Why is directly modifying transform.position discouraged for physics-controlled objects?", options: ["It changes textures", "It bypasses the physics engine", "It increases memory", "It deletes collisions"], answer: 1 },
  { id: 255, question: "Which Unity callback executes first?", options: ["Start()", "Update()", "Awake()", "FixedUpdate()"], answer: 2 },
  { id: 256, question: "Which callback is executed exactly once before the first frame update?", options: ["LateUpdate()", "Start()", "OnDestroy()", "OnCollisionEnter()"], answer: 1 },
  { id: 257, question: "Consider: int score = 5; score += 10; Final value of score?", options: ["5", "10", "15", "20"], answer: 2 },
  { id: 258, question: "Which statement is FALSE about Prefabs?", options: ["They improve reusability.", "Editing the Prefab updates linked instances.", "Prefabs reduce duplication.", "Prefabs cannot contain scripts."], answer: 3 },
  { id: 259, question: "Which Unity API loads another scene?", options: ["SceneManager.LoadScene()", "Application.NextScene()", "Scene.Load()", "Unity.LoadScene()"], answer: 0 },
  { id: 260, question: "Which namespace contains SceneManager?", options: ["UnityEngine.SceneManagement", "Unity.Scene", "UnityEditor", "UnityEngine.Physics"], answer: 0 },
  { id: 261, question: "A NavMesh Agent refuses to move. Which is the MOST likely reason?", options: ["No Rigidbody", "NavMesh has not been baked", "Object is blue", "Camera missing"], answer: 1 },
  { id: 262, question: "Which NavMesh component computes paths automatically?", options: ["NavMeshAgent", "MeshRenderer", "CharacterController", "Rigidbody"], answer: 0 },
  { id: 263, question: "What is the purpose of SetDestination()?", options: ["Rotates an enemy", "Changes animation", "Assigns a target position", "Changes texture"], answer: 2 },
  { id: 264, question: "Which algorithm is commonly used internally for shortest pathfinding?", options: ["Bubble Sort", "A* (A-Star)", "Binary Search", "Merge Sort"], answer: 1 },
  { id: 265, question: "Which AI model is BEST suited for Patrol → Chase → Attack transitions?", options: ["Linked List", "Finite State Machine", "Queue", "Binary Tree"], answer: 1 },
  { id: 266, question: "Which collider produces the MOST accurate collision detection for complex static terrain?", options: ["Box Collider", "Sphere Collider", "Mesh Collider", "Capsule Collider"], answer: 2 },
  { id: 267, question: "Which collider generally provides the BEST performance?", options: ["Mesh Collider", "Box Collider", "Terrain Collider", "Wheel Collider"], answer: 1 },
  { id: 268, question: "What is the main drawback of Mesh Colliders?", options: ["Poor rendering", "High computational cost", "No collision support", "Cannot detect triggers"], answer: 1 },
  { id: 269, question: "Which command applies an impulse force?", options: ["rb.AddForce(force, ForceMode.Impulse);", "transform.Translate()", "transform.Rotate()", "Instantiate()"], answer: 0 },
  { id: 270, question: "Which ForceMode simulates an explosion?", options: ["Force", "Velocity", "Impulse", "Rotation"], answer: 2 },
  { id: 271, question: "Which optimization technique reduces memory allocations?", options: ["Object Pooling", "More Instantiate()", "Larger textures", "More GameObjects"], answer: 0 },
  { id: 272, question: "Which function creates unnecessary garbage if overused?", options: ["Instantiate()", "Destroy()", "Both A and B", "Neither"], answer: 2 },
  { id: 273, question: "What causes Garbage Collection spikes?", options: ["Frequent memory allocation and deallocation", "Lighting", "Cameras", "Terrain"], answer: 0 },
  { id: 274, question: "Which profiler module detects memory allocations?", options: ["CPU Usage", "Memory", "Animation", "Rendering"], answer: 1 },
  { id: 275, question: "Which Unity Profiler graph identifies rendering bottlenecks?", options: ["GPU Usage", "Audio", "Timeline", "Inspector"], answer: 0 },
  { id: 276, question: "Which rendering optimization combines nearby meshes?", options: ["Mesh Combining", "Animator", "Tilemap", "Rigidbody"], answer: 0 },
  { id: 277, question: "Static Batching works ONLY on:", options: ["Moving objects", "Static objects", "Animated objects", "Cameras"], answer: 1 },
  { id: 278, question: "Dynamic Batching is mainly intended for:", options: ["Small moving objects", "Terrain", "UI", "Audio"], answer: 0 },
  { id: 279, question: "Which setting reduces texture memory?", options: ["Texture Compression", "Anti-Aliasing", "Shadows", "VSync"], answer: 0 },
  { id: 280, question: "Which rendering technique skips hidden objects?", options: ["Occlusion Culling", "Texture Mapping", "UV Mapping", "Animation Blending"], answer: 0 },
  { id: 281, question: "Which script execution order is correct?", options: ["Awake → Start → Update", "Start → Awake → Update", "Update → Awake → Start", "FixedUpdate → Awake → Start"], answer: 0 },
  { id: 282, question: "Which callback is synchronized with the physics engine?", options: ["Update()", "FixedUpdate()", "LateUpdate()", "Awake()"], answer: 1 },
  { id: 283, question: "Which callback executes after Update()?", options: ["FixedUpdate()", "Start()", "LateUpdate()", "OnDestroy()"], answer: 2 },
  { id: 284, question: "Which callback is useful for camera-follow scripts?", options: ["Awake()", "LateUpdate()", "Start()", "FixedUpdate()"], answer: 1 },
  { id: 285, question: "Why should expensive calculations NOT be placed inside Update() unnecessarily?", options: ["They increase CPU usage every frame", "They reduce lighting", "They improve FPS", "They affect textures"], answer: 0 },
  { id: 286, question: "Which keyword prevents another class from inheriting a class?", options: ["sealed", "static", "virtual", "override"], answer: 0 },
  { id: 287, question: "Which keyword allows a derived class to modify a base method?", options: ["private", "override", "const", "readonly"], answer: 1 },
  { id: 288, question: "Which keyword marks a method that can be overridden?", options: ["abstract", "virtual", "static", "interface"], answer: 1 },
  { id: 289, question: "Which OOP principle enables runtime method selection?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], answer: 1 },
  { id: 290, question: "Which design principle encourages program to interfaces, not implementations?", options: ["SOLID", "MVC", "FIFO", "LIFO"], answer: 0 },
  { id: 291, question: "Which SOLID principle states that a class should have only one reason to change?", options: ["SRP", "OCP", "ISP", "DIP"], answer: 0 },
  { id: 292, question: "Which debugging technique is MOST effective for intermittent bugs?", options: ["Random guessing", "Logging + breakpoints + reproducible test cases", "Restarting the PC", "Deleting scripts"], answer: 1 },
  { id: 293, question: "Which Unity feature allows breakpoints while debugging C# code?", options: ["Visual Studio Debugger", "Package Manager", "Timeline", "Asset Store"], answer: 0 },
  { id: 294, question: "Which testing type verifies the interaction between multiple game systems?", options: ["Unit Testing", "Integration Testing", "Alpha Testing", "Smoke Testing"], answer: 1 },
  { id: 295, question: "Which testing phase is usually performed by internal developers?", options: ["Alpha Testing", "Beta Testing", "Acceptance Testing", "User Testing"], answer: 0 },
  { id: 296, question: "Which testing phase is performed by selected external users?", options: ["Unit Testing", "Beta Testing", "Integration Testing", "Static Testing"], answer: 1 },
  { id: 297, question: "Which factor MOST affects player retention?", options: ["Engaging gameplay loop", "Maximum polygon count", "Largest executable", "Long loading screens"], answer: 0 },
  { id: 298, question: "Which metric indicates that optimization has been successful?", options: ["Stable frame rate and low CPU/GPU spikes", "Increased build size", "More scripts", "More GameObjects"], answer: 0 },
  { id: 299, question: "Which statement BEST defines a polished Unity game?", options: ["High graphics only", "Balanced gameplay, optimized performance, intuitive UI, bug-free mechanics", "Many scripts", "Large textures"], answer: 1 },
  { id: 300, question: "Which of the following represents the best overall development workflow for a professional Unity project?", options: ["Design → Prototype → Develop → Test → Optimize → Deploy → Maintain", "Code → Release", "Design → Release", "Prototype → Delete → Release"], answer: 0 },
  { id: 301, question: "Consider the following code:\n\n```\nvoid Update()\n{\n    if(Input.GetKeyDown(KeyCode.Space))\n        rb.AddForce(Vector3.up * 500);\n}\n```\n\nWhat is the primary issue if rb has not been assigned?", options: ["Compile-time error", "NullReferenceException at runtime", "Infinite loop", "Stack Overflow"], answer: 1 },
  { id: 302, question: "Which method is the best practice for assigning a frequently used component?", options: ["GetComponent<Rigidbody>(); inside Update()", "void Start() { rb = GetComponent<Rigidbody>(); }", "GameObject.Find() every frame", "FindObjectOfType() every frame"], answer: 1 },
  { id: 303, question: "Why should GetComponent() generally not be called every frame?", options: ["It changes object position", "It is relatively expensive and increases CPU usage", "It crashes Unity", "It removes components"], answer: 1 },
  { id: 304, question: "Which design pattern is commonly used for Event Systems in Unity?", options: ["Observer Pattern", "Factory Pattern", "Builder Pattern", "Prototype Pattern"], answer: 0 },
  { id: 305, question: "Which design pattern is used to create different enemy types without changing existing code?", options: ["Factory Pattern", "Singleton", "Adapter", "Bridge"], answer: 0 },
  { id: 306, question: "Which SOLID principle is violated if one script manages player movement, UI, saving, audio, and AI?", options: ["Single Responsibility Principle", "Open-Closed Principle", "Dependency Inversion Principle", "Liskov Substitution Principle"], answer: 0 },
  { id: 307, question: "Which of the following is the best architecture for a large Unity game?", options: ["One script containing all logic", "Modular component-based architecture", "Everything inside Update()", "Static variables everywhere"], answer: 1 },
  { id: 308, question: "Which Unity feature enables communication between unrelated GameObjects without tight coupling?", options: ["Unity Events", "Mesh Renderer", "Tilemap", "Material"], answer: 0 },
  { id: 309, question: "What is the biggest disadvantage of using many global static variables?", options: ["Easier debugging", "Tight coupling and difficult maintenance", "Faster rendering", "Better AI"], answer: 1 },
  { id: 310, question: "Why are Scriptable Objects preferred for configuration data?", options: ["They reduce code duplication and separate data from behavior.", "They replace scenes.", "They improve rendering speed.", "They automatically optimize physics."], answer: 0 },
  { id: 311, question: "Which statement about Coroutines is TRUE?", options: ["They execute on a separate thread.", "They allow execution to pause and resume over multiple frames.", "They increase CPU cores.", "They replace Update() completely."], answer: 1 },
  { id: 312, question: "Which statement starts a Coroutine?", options: ["StartCoroutine(MyRoutine());", "RunCoroutine();", "Coroutine.Start();", "ExecuteCoroutine();"], answer: 0 },
  { id: 313, question: "Which yield statement waits exactly one frame?", options: ["yield return null;", "yield return 1;", "yield return true;", "yield return Update();"], answer: 0 },
  { id: 314, question: "Which yield instruction waits for a specified duration?", options: ["yield return new WaitForSeconds(time);", "yield return Wait();", "Thread.Sleep()", "Pause()"], answer: 0 },
  { id: 315, question: "Which situation is BEST suited for Coroutines?", options: ["Loading animations", "Waiting before opening a door", "Moving physics objects", "Rendering meshes"], answer: 1 },
  { id: 316, question: "Which of the following is NOT a benefit of Object Pooling?", options: ["Reduced garbage collection", "Better runtime performance", "Eliminates unnecessary Instantiate()/Destroy()", "Increases memory fragmentation"], answer: 3 },
  { id: 317, question: "Which Unity optimization reduces CPU overhead caused by inactive GameObjects?", options: ["Disabling unnecessary objects", "Increasing light count", "Adding colliders", "Larger textures"], answer: 0 },
  { id: 318, question: "Which type of batching combines identical materials into fewer draw calls?", options: ["Static/Dynamic Batching", "Animation Blending", "Raycasting", "NavMesh Baking"], answer: 0 },
  { id: 319, question: "Why should transparent shaders be minimized?", options: ["They increase overdraw.", "They improve FPS.", "They reduce memory.", "They disable shadows."], answer: 0 },
  { id: 320, question: "Which optimization reduces polygon processing?", options: ["Level of Detail (LOD)", "More lights", "More colliders", "Bigger textures"], answer: 0 },
  { id: 321, question: "Which Unity component switches between different mesh resolutions?", options: ["LOD Group", "Mesh Renderer", "Animator", "Rigidbody"], answer: 0 },
  { id: 322, question: "Which optimization mainly reduces GPU workload?", options: ["LOD", "More scripts", "More Update() methods", "More particles"], answer: 0 },
  { id: 323, question: "Which Unity feature automatically unloads unused assets?", options: ["Resources.UnloadUnusedAssets()", "DestroyAssets()", "ClearMemory()", "DeleteUnused()"], answer: 0 },
  { id: 324, question: "Which profiler graph is most useful when diagnosing frame spikes?", options: ["Timeline View", "Hierarchy", "Console", "Project Browser"], answer: 0 },
  { id: 325, question: "Which issue is MOST likely if FPS suddenly drops only when many enemies appear?", options: ["AI calculations", "Audio volume", "UI fonts", "Scene name"], answer: 0 },
  { id: 326, question: "Which AI algorithm commonly uses weighted graph traversal?", options: ["A*", "Bubble Sort", "Quick Sort", "DFS only"], answer: 0 },
  { id: 327, question: "Which algorithm guarantees the shortest path when an admissible heuristic is used?", options: ["A*", "Bubble Sort", "Insertion Sort", "BFS"], answer: 0 },
  { id: 328, question: "Why are Behavior Trees preferred over Finite State Machines in complex AI?", options: ["Easier handling of many behaviors", "Lower graphics usage", "Better lighting", "Smaller textures"], answer: 0 },
  { id: 329, question: "Which Unity system allows AI navigation on uneven terrain?", options: ["NavMesh Surface", "Tile Palette", "Canvas", "Animation Window"], answer: 0 },
  { id: 330, question: "What is the advantage of separating AI logic from movement logic?", options: ["Better maintainability and scalability", "More draw calls", "Reduced lighting", "More memory usage"], answer: 0 },
  { id: 331, question: "Which camera technique reduces abrupt movement?", options: ["Smooth Damp", "Teleport", "Instant Snap", "Random Rotation"], answer: 0 },
  { id: 332, question: "Which Cinemachine component follows the player smoothly?", options: ["Virtual Camera", "Mesh Filter", "Rigidbody", "Sprite Renderer"], answer: 0 },
  { id: 333, question: "Which Unity package is widely used for professional camera systems?", options: ["Cinemachine", "Tilemap", "TextMeshPro", "ProBuilder"], answer: 0 },
  { id: 334, question: "Which package simplifies cutscene creation?", options: ["Timeline", "Shader Graph", "Sprite Atlas", "Terrain Tools"], answer: 0 },
  { id: 335, question: "Which Timeline component controls playback?", options: ["Playable Director", "Animator", "Rigidbody", "Canvas"], answer: 0 },
  { id: 336, question: "Which software engineering practice catches defects earliest?", options: ["Code Review", "Beta Testing", "Release", "Marketing"], answer: 0 },
  { id: 337, question: "Which testing verifies an individual function?", options: ["Unit Testing", "Integration Testing", "Acceptance Testing", "Stress Testing"], answer: 0 },
  { id: 338, question: "Which testing checks the interaction among multiple modules?", options: ["Integration Testing", "Unit Testing", "Smoke Testing", "Alpha Testing"], answer: 0 },
  { id: 339, question: "Which testing determines system stability under heavy load?", options: ["Stress Testing", "Functional Testing", "Regression Testing", "Unit Testing"], answer: 0 },
  { id: 340, question: "Which debugging tool allows step-by-step execution?", options: ["Breakpoints", "Console Window", "Inspector", "Scene View"], answer: 0 },
  { id: 341, question: "Which debugging technique is MOST effective for race-condition-like issues?", options: ["Logging with timestamps", "Deleting scripts", "Restarting Unity", "Rebuilding textures"], answer: 0 },
  { id: 342, question: "Which programming practice improves readability the MOST?", options: ["Meaningful variable names", "Single-letter variables everywhere", "Very long methods", "Deep nesting"], answer: 0 },
  { id: 343, question: "Which principle recommends avoiding duplicate code?", options: ["DRY", "KISS", "SOLID", "YAGNI"], answer: 0 },
  { id: 344, question: "Which principle encourages keeping solutions simple?", options: ["KISS", "DRY", "OCP", "DIP"], answer: 0 },
  { id: 345, question: "Which principle discourages implementing unnecessary features?", options: ["YAGNI", "MVC", "FIFO", "BFS"], answer: 0 },
  { id: 346, question: "Which metric is MOST useful for evaluating gameplay quality?", options: ["Player retention and engagement", "Number of scripts", "Build size", "Number of textures"], answer: 0 },
  { id: 347, question: "Which practice is MOST important before publishing to the Unity Store or app stores?", options: ["Profiling and optimization on target devices", "Renaming folders", "Increasing polygon count", "Removing comments only"], answer: 0 },
  { id: 348, question: "Which document describes gameplay mechanics, UI, story, and technical requirements?", options: ["Game Design Document (GDD)", "README", "LICENSE", "CHANGELOG"], answer: 0 },
  { id: 349, question: "Which phase usually consumes the MOST time in professional game development?", options: ["Testing, balancing, and polishing", "Creating the first scene", "Installing Unity", "Importing one texture"], answer: 0 },
  { id: 350, question: "Which statement BEST represents professional Unity development?", options: ["Write maintainable code, optimize continuously, test thoroughly, and design for scalability.", "Focus only on graphics.", "Put all logic in one script.", "Optimize only after release."], answer: 0 },
  { id: 351, question: "Which Unity feature is used to organize reusable game assets?", options: ["Prefabs", "Console", "Scene View", "Inspector"], answer: 0 },
  { id: 352, question: "Which component is required for an object to respond to Unity's physics engine?", options: ["Animator", "Rigidbody", "Mesh Renderer", "Audio Source"], answer: 1 },
  { id: 353, question: "Which method is commonly used to detect when two colliders touch physically?", options: ["OnTriggerEnter()", "OnCollisionEnter()", "Update()", "Awake()"], answer: 1 },
  { id: 354, question: "What is the purpose of the Is Trigger option on a Collider?", options: ["Makes the object invisible", "Detects overlap without physical collision", "Disables physics completely", "Increases gravity"], answer: 1 },
  { id: 355, question: "Which Unity component controls transitions between animation states?", options: ["Animation Window", "Animator Controller", "Mesh Renderer", "Audio Mixer"], answer: 1 },
  { id: 356, question: "Which parameter type is most suitable for enabling or disabling a running animation?", options: ["Float", "Boolean", "Trigger", "Integer"], answer: 1 },
  { id: 357, question: "Which parameter type is generally used for one-time actions like Attack?", options: ["Float", "Boolean", "Trigger", "String"], answer: 2 },
  { id: 358, question: "Which Unity package is commonly used for advanced camera systems?", options: ["Cinemachine", "NavMesh", "ProBuilder", "Tilemap"], answer: 0 },
  { id: 359, question: "What is the main advantage of Cinemachine?", options: ["Automatic smooth camera movement", "Better scripting", "Faster compilation", "Better networking"], answer: 0 },
  { id: 360, question: "Which Unity feature is mainly used to create cinematic sequences?", options: ["Timeline", "Terrain", "Tile Palette", "Physics"], answer: 0 },
  { id: 361, question: "Which component plays a Timeline sequence?", options: ["Rigidbody", "Playable Director", "Audio Listener", "Mesh Filter"], answer: 1 },
  { id: 362, question: "Which Unity system helps synchronize audio, animations, and camera movement?", options: ["Timeline", "NavMesh", "Canvas", "Scene View"], answer: 0 },
  { id: 363, question: "What is the purpose of a Game Design Document (GDD)?", options: ["To describe the game's design and development plan", "To compile C# scripts", "To store textures", "To optimize rendering"], answer: 0 },
  { id: 364, question: "Which section is typically included in a GDD?", options: ["Gameplay mechanics", "Storyline", "User Interface", "All of the above"], answer: 3 },
  { id: 365, question: "Which development phase comes after designing the game?", options: ["Testing", "Development", "Marketing", "Maintenance"], answer: 1 },
  { id: 366, question: "Which phase usually identifies bugs before release?", options: ["Testing", "Planning", "Deployment", "Documentation"], answer: 0 },
  { id: 367, question: "Which testing is performed by the game's developers?", options: ["Alpha Testing", "Beta Testing", "User Acceptance Testing", "Production Testing"], answer: 0 },
  { id: 368, question: "Which testing is performed by external users before the final release?", options: ["Unit Testing", "Integration Testing", "Beta Testing", "Smoke Testing"], answer: 2 },
  { id: 369, question: "Which Unity window displays runtime messages generated by Debug.Log()?", options: ["Inspector", "Project", "Console", "Scene"], answer: 2 },
  { id: 370, question: "What is the primary purpose of Debug.Log()?", options: ["Delete objects", "Display debugging information", "Change animations", "Load scenes"], answer: 1 },
  { id: 371, question: "Which Unity feature helps measure CPU, GPU, and memory usage?", options: ["Profiler", "Console", "Inspector", "Hierarchy"], answer: 0 },
  { id: 372, question: "Which optimization technique reduces repeated object creation?", options: ["Object Pooling", "Scene Reloading", "Raycasting", "Animation Events"], answer: 0 },
  { id: 373, question: "Why is Object Pooling preferred for bullets?", options: ["Reduces garbage collection", "Improves lighting", "Increases texture quality", "Changes animations"], answer: 0 },
  { id: 374, question: "Which Unity method creates a copy of an existing GameObject?", options: ["Clone()", "Instantiate()", "Duplicate()", "Create()"], answer: 1 },
  { id: 375, question: "Which Unity method removes a GameObject from the scene?", options: ["Delete()", "Remove()", "Destroy()", "Erase()"], answer: 2 },
  { id: 376, question: "Which feature prevents a GameObject from being destroyed when changing scenes?", options: ["PlayerPrefs", "DontDestroyOnLoad()", "SaveGame()", "KeepAlive()"], answer: 1 },
  { id: 377, question: "Which class is commonly used to save simple game settings?", options: ["File", "PlayerPrefs", "SceneManager", "Resources"], answer: 1 },
  { id: 378, question: "Which PlayerPrefs method stores a string value?", options: ["SetValue()", "SetString()", "SaveString()", "WriteString()"], answer: 1 },
  { id: 379, question: "Which PlayerPrefs method retrieves a float value?", options: ["GetFloat()", "ReadFloat()", "LoadFloat()", "FetchFloat()"], answer: 0 },
  { id: 380, question: "Which feature allows NPCs to avoid obstacles while moving?", options: ["NavMesh", "Timeline", "Canvas", "Sprite Editor"], answer: 0 },
  { id: 381, question: "Which component calculates a path to a destination?", options: ["NavMesh Agent", "Character Controller", "Rigidbody", "Collider"], answer: 0 },
  { id: 382, question: "Which AI behavior causes an enemy to remain inactive until the player is detected?", options: ["Idle", "Attack", "Chase", "Flee"], answer: 0 },
  { id: 383, question: "Which AI behavior follows the player after detection?", options: ["Patrol", "Chase", "Sleep", "Hide"], answer: 1 },
  { id: 384, question: "Which AI behavior usually occurs after Chase?", options: ["Patrol", "Attack", "Sleep", "Respawn"], answer: 1 },
  { id: 385, question: "Which gameplay element increases replay value?", options: ["Multiple difficulty levels", "Large executable size", "Compiler warnings", "More folders"], answer: 0 },
  { id: 386, question: "Which of the following is considered good UI design?", options: ["Clear and consistent layout", "Hidden buttons", "Tiny unreadable text", "Random colors everywhere"], answer: 0 },
  { id: 387, question: "Which UI element is most suitable for displaying player score?", options: ["Text/TextMeshPro", "Rigidbody", "Collider", "Material"], answer: 0 },
  { id: 388, question: "Which UI element is commonly used for health?", options: ["Slider", "Toggle", "Dropdown", "Scrollbar"], answer: 0 },
  { id: 389, question: "Which audio component plays background music?", options: ["Audio Source", "Audio Listener", "Animator", "Camera"], answer: 0 },
  { id: 390, question: "Which component receives sound in the scene?", options: ["Audio Listener", "Audio Source", "Audio Mixer", "Canvas"], answer: 0 },
  { id: 391, question: "Which Unity package is mainly used to create professional text elements?", options: ["TextMeshPro", "Timeline", "ProBuilder", "Cinemachine"], answer: 0 },
  { id: 392, question: "Which factor most affects player satisfaction?", options: ["Smooth gameplay", "Large file size", "High RAM usage", "Long loading screens"], answer: 0 },
  { id: 393, question: "Which document helps developers understand project requirements?", options: ["Game Design Document", "README only", "License", "Manifest"], answer: 0 },
  { id: 394, question: "Which Unity practice improves project organization?", options: ["Meaningful folder structure", "Keeping all files in one folder", "Using random names", "Avoiding Prefabs"], answer: 0 },
  { id: 395, question: "Which programming practice improves maintainability?", options: ["Modular scripts", "One script for everything", "Copy-paste code", "Long methods"], answer: 0 },
  { id: 396, question: "Which principle encourages reusable code?", options: ["DRY (Don't Repeat Yourself)", "FIFO", "LIFO", "BFS"], answer: 0 },
  { id: 397, question: "Which step should always be performed before publishing a game?", options: ["Testing and optimization", "Delete comments", "Remove Prefabs", "Delete backups"], answer: 0 },
  { id: 398, question: "Which is the best indicator of a well-optimized game?", options: ["Stable FPS and smooth gameplay", "Large texture size", "More GameObjects", "More scripts"], answer: 0 },
  { id: 399, question: "Which professional practice helps teams work efficiently on Unity projects?", options: ["Version Control (Git)", "Saving files with random names", "Avoiding backups", "Keeping all work on one computer"], answer: 0 },
  { id: 400, question: "Which statement best summarizes professional game development?", options: ["Plan carefully, develop systematically, test thoroughly, optimize continuously, and maintain the project after release.", "Focus only on graphics.", "Skip testing to save time.", "Write all code in a single script."], answer: 0 },
  { id: 401, question: "Which Unity component is responsible for storing an object's position, rotation, and scale?", options: ["Rigidbody", "Transform", "Mesh Renderer", "Collider"], answer: 1 },
  { id: 402, question: "Which Unity function is called once before the first frame update?", options: ["Update()", "FixedUpdate()", "Start()", "LateUpdate()"], answer: 2 },
  { id: 403, question: "Which method should be used for continuous player movement based on keyboard input?", options: ["Awake()", "Update()", "OnDestroy()", "OnTriggerEnter()"], answer: 1 },
  { id: 404, question: "Which method is primarily used for physics calculations?", options: ["Update()", "Start()", "FixedUpdate()", "LateUpdate()"], answer: 2 },
  { id: 405, question: "Which Unity class is used to manage scene loading?", options: ["PlayerPrefs", "SceneManager", "GameManager", "Animator"], answer: 1 },
  { id: 406, question: "Which namespace contains SceneManager?", options: ["UnityEngine.SceneManagement", "UnityEngine.Rendering", "UnityEditor", "UnityEngine.UI"], answer: 0 },
  { id: 407, question: "Which method loads a scene named \"Level2\"?", options: ["LoadScene(\"Level2\")", "SceneManager.LoadScene(\"Level2\")", "Scene.Load(\"Level2\")", "Application.Load(\"Level2\")"], answer: 1 },
  { id: 408, question: "Which component allows an object to react to gravity?", options: ["Audio Source", "Rigidbody", "Mesh Renderer", "Animator"], answer: 1 },
  { id: 409, question: "Which collider is best suited for a football?", options: ["Box Collider", "Capsule Collider", "Sphere Collider", "Mesh Collider"], answer: 2 },
  { id: 410, question: "Which collider is commonly used for walls?", options: ["Sphere Collider", "Capsule Collider", "Box Collider", "Wheel Collider"], answer: 2 },
  { id: 411, question: "Which component is commonly attached to the Main Camera to receive sound?", options: ["Audio Source", "Audio Listener", "Audio Mixer", "Audio Clip"], answer: 1 },
  { id: 412, question: "Which component actually plays a sound clip?", options: ["Audio Listener", "Audio Source", "Rigidbody", "Canvas"], answer: 1 },
  { id: 413, question: "Which feature allows reuse of the same GameObject in multiple places?", options: ["Materials", "Prefabs", "Scenes", "Layers"], answer: 1 },
  { id: 414, question: "Which Unity window shows all imported assets?", options: ["Hierarchy", "Inspector", "Project", "Console"], answer: 2 },
  { id: 415, question: "Which Unity window displays GameObjects currently in the scene?", options: ["Hierarchy", "Project", "Scene", "Console"], answer: 0 },
  { id: 416, question: "Which window displays compiler errors?", options: ["Inspector", "Console", "Project", "Hierarchy"], answer: 1 },
  { id: 417, question: "Which scripting keyword creates a new object instance?", options: ["class", "new", "object", "create"], answer: 1 },
  { id: 418, question: "Which keyword is used to inherit from another class?", options: ["extends", "inherits", ":", "implements"], answer: 2 },
  { id: 419, question: "Which variable type stores decimal numbers?", options: ["int", "float", "bool", "string"], answer: 1 },
  { id: 420, question: "Which variable type stores true or false?", options: ["char", "bool", "string", "float"], answer: 1 },
  { id: 421, question: "Which function prints a message to the Console?", options: ["Console.Write()", "Debug.Log()", "PrintLine()", "Output()"], answer: 1 },
  { id: 422, question: "Which method creates a duplicate of a Prefab during gameplay?", options: ["Duplicate()", "Instantiate()", "Clone()", "Copy()"], answer: 1 },
  { id: 423, question: "Which method destroys a GameObject?", options: ["Delete()", "Destroy()", "Remove()", "End()"], answer: 1 },
  { id: 424, question: "Which input method detects a key being pressed only once?", options: ["Input.GetKey()", "Input.GetKeyDown()", "Input.GetAxis()", "Input.GetButton()"], answer: 1 },
  { id: 425, question: "Which input method detects a key being held continuously?", options: ["Input.GetKey()", "Input.GetKeyDown()", "Input.GetKeyUp()", "Input.GetAxisRaw()"], answer: 0 },
  { id: 426, question: "Which Unity component is mainly used for UI elements?", options: ["Canvas", "Rigidbody", "Collider", "Animator"], answer: 0 },
  { id: 427, question: "Which UI element is commonly used for buttons?", options: ["Image", "Button", "Slider", "Panel"], answer: 1 },
  { id: 428, question: "Which UI element displays numerical scores?", options: ["Text/TextMeshPro", "Toggle", "Dropdown", "Scrollbar"], answer: 0 },
  { id: 429, question: "Which package provides high-quality text rendering?", options: ["Tilemap", "Timeline", "TextMeshPro", "Cinemachine"], answer: 2 },
  { id: 430, question: "Which Unity feature is mainly used for AI navigation?", options: ["Animator", "NavMesh", "Canvas", "Audio Mixer"], answer: 1 },
  { id: 431, question: "Which component follows a NavMesh path?", options: ["Rigidbody", "NavMesh Agent", "Character Controller", "Collider"], answer: 1 },
  { id: 432, question: "Which AI state usually comes before Attack?", options: ["Chase", "Sleep", "Idle", "Respawn"], answer: 0 },
  { id: 433, question: "Which AI behavior makes an enemy move between fixed points?", options: ["Patrol", "Attack", "Hide", "Jump"], answer: 0 },
  { id: 434, question: "Which method is used to save a player's high score?", options: ["PlayerPrefs.SetInt()", "SaveScore()", "WriteScore()", "GameManager.Save()"], answer: 0 },
  { id: 435, question: "Which method retrieves a saved integer value?", options: ["PlayerPrefs.GetInt()", "ReadInt()", "LoadInt()", "FetchInt()"], answer: 0 },
  { id: 436, question: "Which Unity feature helps reduce unnecessary rendering?", options: ["Occlusion Culling", "Audio Mixer", "Timeline", "Sprite Atlas"], answer: 0 },
  { id: 437, question: "Which optimization technique reuses objects instead of repeatedly creating and destroying them?", options: ["Static Batching", "Object Pooling", "Light Baking", "LOD"], answer: 1 },
  { id: 438, question: "Which Unity tool measures game performance?", options: ["Profiler", "Inspector", "Hierarchy", "Package Manager"], answer: 0 },
  { id: 439, question: "Which profiler metric measures rendering performance?", options: ["GPU Usage", "Audio", "Physics", "Animation"], answer: 0 },
  { id: 440, question: "Which feature improves performance by reducing polygon count at greater distances?", options: ["NavMesh", "LOD Group", "Timeline", "Canvas"], answer: 1 },
  { id: 441, question: "Which testing ensures previously working features still function after updates?", options: ["Regression Testing", "Unit Testing", "Alpha Testing", "Smoke Testing"], answer: 0 },
  { id: 442, question: "Which testing checks individual methods or classes?", options: ["Integration Testing", "Unit Testing", "Beta Testing", "Stress Testing"], answer: 1 },
  { id: 443, question: "Which testing verifies interaction between different modules?", options: ["Unit Testing", "Regression Testing", "Integration Testing", "Performance Testing"], answer: 2 },
  { id: 444, question: "Which development document describes gameplay, UI, story, and mechanics?", options: ["API Documentation", "Game Design Document (GDD)", "README", "Build Report"], answer: 1 },
  { id: 445, question: "Which Unity package is widely used for smooth cinematic camera movement?", options: ["Timeline", "Cinemachine", "NavMesh", "Tilemap"], answer: 1 },
  { id: 446, question: "Which Unity feature is used to create cinematic cutscenes?", options: ["Timeline", "Rigidbody", "Profiler", "Shader Graph"], answer: 0 },
  { id: 447, question: "Which factor contributes the most to good player experience?", options: ["Balanced gameplay", "Large executable size", "Maximum polygon count", "Random controls"], answer: 0 },
  { id: 448, question: "Which software engineering principle encourages writing reusable code?", options: ["DRY (Don't Repeat Yourself)", "FIFO", "LIFO", "DFS"], answer: 0 },
  { id: 449, question: "Which practice is recommended before publishing a Unity game?", options: ["Test, debug, and optimize", "Remove comments only", "Delete Prefabs", "Disable physics"], answer: 0 },
  { id: 450, question: "Which statement best represents a successful Unity project?", options: ["Good planning, modular code, optimized performance, thorough testing, and polished gameplay", "Maximum graphics quality only", "One script controlling the entire game", "Skipping testing to reduce development time"], answer: 0 },
  { id: 451, question: "Which Unity feature stores reusable project assets?", options: ["Console", "Hierarchy", "Project Window", "Inspector"], answer: 2 },
  { id: 452, question: "Which component makes a GameObject visible in a 3D scene?", options: ["Mesh Renderer", "Rigidbody", "Collider", "Audio Source"], answer: 0 },
  { id: 453, question: "Which component stores the mesh data of a 3D object?", options: ["Mesh Filter", "Mesh Renderer", "Animator", "Rigidbody"], answer: 0 },
  { id: 454, question: "Which Unity component allows a player to move using built-in collision handling without using Rigidbody physics?", options: ["NavMesh Agent", "Character Controller", "Capsule Collider", "Transform"], answer: 1 },
  { id: 455, question: "Which function is used to rotate an object every frame?", options: ["Translate()", "Rotate()", "Move()", "Shift()"], answer: 1 },
  { id: 456, question: "Which property changes an object's size?", options: ["Position", "Rotation", "Scale", "Velocity"], answer: 2 },
  { id: 457, question: "Which Transform property changes an object's location?", options: ["rotation", "localScale", "position", "forward"], answer: 2 },
  { id: 458, question: "Which Unity feature organizes GameObjects into parent-child relationships?", options: ["Hierarchy", "Timeline", "Package Manager", "Console"], answer: 0 },
  { id: 459, question: "Which C# keyword declares a constant value?", options: ["static", "const", "readonly", "virtual"], answer: 1 },
  { id: 460, question: "Which keyword prevents direct access to a variable outside its class?", options: ["public", "private", "protected", "internal"], answer: 1 },
  { id: 461, question: "Which keyword allows a member to be accessed from any script?", options: ["private", "protected", "public", "internal"], answer: 2 },
  { id: 462, question: "Which collection can store multiple values of the same type?", options: ["Array", "Boolean", "Float", "Character"], answer: 0 },
  { id: 463, question: "Which loop executes a known number of iterations?", options: ["while", "do-while", "for", "switch"], answer: 2 },
  { id: 464, question: "Which statement selects one option from many possible cases?", options: ["if", "while", "switch", "foreach"], answer: 2 },
  { id: 465, question: "Which keyword immediately exits a method?", options: ["break", "continue", "return", "stop"], answer: 2 },
  { id: 466, question: "Which event occurs when two trigger colliders overlap?", options: ["OnCollisionEnter()", "OnTriggerEnter()", "OnCollisionExit()", "OnMouseDown()"], answer: 1 },
  { id: 467, question: "Which event occurs when two physical colliders make contact?", options: ["OnTriggerEnter()", "OnCollisionEnter()", "OnTriggerStay()", "Awake()"], answer: 1 },
  { id: 468, question: "Which method detects a left mouse button click?", options: ["Input.GetMouseButtonDown(0)", "Input.GetKeyDown()", "Input.GetAxis()", "Mouse.Click()"], answer: 0 },
  { id: 469, question: "Which value represents the left mouse button in GetMouseButtonDown()?", options: ["0", "1", "2", "3"], answer: 0 },
  { id: 470, question: "Which component is required to animate a character?", options: ["Animator", "Rigidbody", "Canvas", "Mesh Filter"], answer: 0 },
  { id: 471, question: "Which Unity window is used to create animation clips?", options: ["Animation Window", "Hierarchy", "Console", "Package Manager"], answer: 0 },
  { id: 472, question: "Which Unity package is used for AI pathfinding?", options: ["Timeline", "NavMesh", "Tilemap", "TextMeshPro"], answer: 1 },
  { id: 473, question: "Which method assigns a destination to a NavMesh Agent?", options: ["Move()", "SetDestination()", "Navigate()", "Go()"], answer: 1 },
  { id: 474, question: "Which AI behavior usually occurs first?", options: ["Attack", "Patrol", "Chase", "Escape"], answer: 1 },
  { id: 475, question: "Which optimization technique hides objects blocked from the camera?", options: ["Occlusion Culling", "Object Pooling", "Light Baking", "Compression"], answer: 0 },
  { id: 476, question: "Which optimization technique combines nearby static meshes?", options: ["Static Batching", "Object Pooling", "Animation Blending", "Raycasting"], answer: 0 },
  { id: 477, question: "Which lighting type is best for a flashlight?", options: ["Point Light", "Spot Light", "Directional Light", "Area Light"], answer: 1 },
  { id: 478, question: "Which lighting type best simulates sunlight?", options: ["Spot Light", "Point Light", "Directional Light", "Area Light"], answer: 2 },
  { id: 479, question: "Which file format is commonly used for importing 3D models?", options: ["FBX", "PDF", "TXT", "CSV"], answer: 0 },
  { id: 480, question: "Which feature stores game progress between sessions?", options: ["PlayerPrefs", "Rigidbody", "Timeline", "Mesh Filter"], answer: 0 },
  { id: 481, question: "Which PlayerPrefs method stores a floating-point value?", options: ["SetFloat()", "SaveFloat()", "WriteFloat()", "StoreFloat()"], answer: 0 },
  { id: 482, question: "Which PlayerPrefs method retrieves a string?", options: ["ReadString()", "GetString()", "LoadString()", "FetchString()"], answer: 1 },
  { id: 483, question: "Which document outlines the overall game concept before development begins?", options: ["Game Design Document (GDD)", "README", "Build Report", "Release Notes"], answer: 0 },
  { id: 484, question: "Which stage follows coding in the software development cycle?", options: ["Testing", "Planning", "Documentation", "Requirement Analysis"], answer: 0 },
  { id: 485, question: "Which testing ensures new changes do not break existing functionality?", options: ["Stress Testing", "Regression Testing", "Beta Testing", "Smoke Testing"], answer: 1 },
  { id: 486, question: "Which testing focuses on the complete integrated game?", options: ["Unit Testing", "System Testing", "Static Testing", "White-box Testing"], answer: 1 },
  { id: 487, question: "Which Unity tool is best for identifying memory leaks?", options: ["Profiler", "Timeline", "Hierarchy", "Scene View"], answer: 0 },
  { id: 488, question: "Which metric is generally targeted for smooth gameplay on modern systems?", options: ["10 FPS", "20 FPS", "30–60 FPS or higher", "5 FPS"], answer: 2 },
  { id: 489, question: "Which software is commonly integrated with Unity for version control?", options: ["Git", "Photoshop", "Blender", "VLC"], answer: 0 },
  { id: 490, question: "Which principle recommends writing simple and understandable code?", options: ["KISS", "DRY", "SOLID", "YAGNI"], answer: 0 },
  { id: 491, question: "Which principle recommends avoiding duplicate code?", options: ["DRY", "FIFO", "LIFO", "BFS"], answer: 0 },
  { id: 492, question: "Which principle suggests not implementing features until they are needed?", options: ["SOLID", "KISS", "YAGNI", "MVC"], answer: 2 },
  { id: 493, question: "Which of the following is an example of good game balancing?", options: ["Making every enemy impossible to defeat", "Gradually increasing difficulty", "Giving unlimited health from the beginning", "Randomly changing controls"], answer: 1 },
  { id: 494, question: "Which aspect has the greatest impact on player immersion?", options: ["Consistent gameplay, audio, and visuals", "Large executable size", "Long loading times", "Random UI changes"], answer: 0 },
  { id: 495, question: "Which practice improves code readability?", options: ["Using meaningful variable names", "Using one-letter variable names everywhere", "Avoiding comments completely", "Writing all code in one method"], answer: 0 },
  { id: 496, question: "Which practice helps multiple developers collaborate effectively?", options: ["Version Control", "Copying files manually", "Using different coding styles", "Storing code on one computer only"], answer: 0 },
  { id: 497, question: "Which action should be performed before releasing a game to players?", options: ["Testing and bug fixing", "Deleting backup files only", "Removing comments", "Deleting Prefabs"], answer: 0 },
  { id: 498, question: "Which factor is most important when optimizing a Unity game?", options: ["Stable performance with acceptable visual quality", "Maximum texture size", "Maximum number of GameObjects", "Highest polygon count"], answer: 0 },
  { id: 499, question: "Which statement best describes a successful Unity project?", options: ["It combines clean code, optimized performance, engaging gameplay, and thorough testing.", "It focuses only on graphics.", "It contains the largest number of scripts.", "It uses only one scene."], answer: 0 },
  { id: 500, question: "Which of the following best summarizes professional Unity game development?", options: ["Requirements → Design → Development → Testing → Optimization → Deployment → Maintenance", "Development → Deployment", "Coding → Release", "Design → Release"], answer: 0 }
];

const EXAM_QUESTION_BANK = QUESTION_BANK.slice(0, 100);
const EXAM_DURATION_SECONDS = 120 * 60;
const NEGATIVE_MARKING_INTERVAL = 4;
const STORAGE_KEY = 'unity-exam-state-v1';

function createInitialState() {
  return {
    currentQuestion: 0,
    answers: {},
    markedForReview: [],
    timeRemaining: EXAM_DURATION_SECONDS,
    submitted: false,
    timeExpired: false,
    timerStarted: false
  };
}

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    return {
      ...createInitialState(),
      ...parsed,
      answers: parsed.answers || {},
      markedForReview: parsed.markedForReview || []
    };
  } catch (error) {
    console.warn('Unable to load exam state:', error);
    return null;
  }
}

function saveStateToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...state,
      answers: state.answers || {},
      markedForReview: state.markedForReview || []
    }));
  } catch (error) {
    console.warn('Unable to save exam state:', error);
  }
}

function resetStoredState() {
  Object.assign(state, createInitialState());
  saveStateToStorage();
}

const state = loadStateFromStorage() || createInitialState();

if (new URLSearchParams(window.location.search).get('reset') === '1') {
  resetStoredState();
}

let timerIntervalId = null;

function getCurrentQuestion() {
  return EXAM_QUESTION_BANK[state.currentQuestion] || null;
}

function renderPlaceholder() {
  const questionNumber = document.getElementById('question-number');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const prevBtn = document.getElementById('prev-btn');
  const saveNextBtn = document.getElementById('save-next-btn');
  const markReviewBtn = document.getElementById('mark-review-btn');
  const clearResponseBtn = document.getElementById('clear-response-btn');

  if (questionNumber) questionNumber.textContent = 'Mission Brief';
  if (questionText) {
    questionText.innerHTML = `
      <div class="placeholder-card">
        <h3>Quest Log Ready</h3>
        <p>Your Unity3D exam bank is empty and waiting for your new questions and answers.</p>
        <p class="placeholder-tip">Paste your MCQs into the JavaScript file and the arena will load them instantly.</p>
      </div>
    `;
  }

  if (optionsContainer) {
    optionsContainer.innerHTML = `
      <div class="placeholder-card compact">
        <p>• No questions loaded yet</p>
        <p>• Add your Unity3D MCQs and correct answers</p>
        <p>• Results will update automatically once the bank is filled</p>
      </div>
    `;
  }

  if (prevBtn) prevBtn.disabled = true;
  if (saveNextBtn) saveNextBtn.disabled = true;
  if (markReviewBtn) markReviewBtn.disabled = true;
  if (clearResponseBtn) clearResponseBtn.disabled = true;
}

function renderExamView() {
  const question = getCurrentQuestion();
  if (!question) {
    renderPlaceholder();
    return;
  }

  const questionNumber = document.getElementById('question-number');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');

  if (questionNumber) {
    questionNumber.textContent = `Question ${state.currentQuestion + 1} / ${EXAM_QUESTION_BANK.length}`;
  }

  if (questionText) questionText.textContent = question.question;

  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
      const label = document.createElement('label');
      label.className = `option-item ${state.answers[state.currentQuestion] === index ? 'selected' : ''}`;
      label.innerHTML = `
        <input type="radio" name="answer" value="${index}" ${state.answers[state.currentQuestion] === index ? 'checked' : ''}>
        <span>${option}</span>
      `;
      label.addEventListener('click', () => {
        state.answers[state.currentQuestion] = index;
        saveStateToStorage();
        renderExamView();
      });
      optionsContainer.appendChild(label);
    });
  }
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('timer');
  if (!timerEl) return;

  const minutes = Math.floor(state.timeRemaining / 60);
  const seconds = state.timeRemaining % 60;
  timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (timerIntervalId !== null) return;
  state.timerStarted = true;
  updateTimerDisplay();

  timerIntervalId = setInterval(() => {
    state.timeRemaining -= 1;
    saveStateToStorage();
    updateTimerDisplay();

    if (state.timeRemaining <= 0) {
      clearInterval(timerIntervalId);
      timerIntervalId = null;
      state.timeExpired = true;
      state.submitted = true;
      saveStateToStorage();
      window.location.href = 'result.html';
    }
  }, 1000);
}

function renderResultView() {
  const scoreLabel = document.getElementById('score-percentage');
  const totalQuestions = document.getElementById('total-questions');
  const attempted = document.getElementById('attempted');
  const correctAnswers = document.getElementById('correct-answers');
  const wrongAnswers = document.getElementById('wrong-answers');
  const netScore = document.getElementById('net-score');
  const negativeMarks = document.getElementById('negative-marks');

  const total = EXAM_QUESTION_BANK.length;
  const answered = Object.keys(state.answers || {}).filter((index) => state.answers[index] !== undefined && state.answers[index] !== null).length;
  const correct = Object.entries(state.answers || {}).filter(([index, answer]) => {
    const question = EXAM_QUESTION_BANK[Number(index)];
    return question && question.answer === answer;
  }).length;
  const wrong = answered - correct;
  const penalty = Math.floor(wrong / NEGATIVE_MARKING_INTERVAL);
  const finalScore = Math.max(0, correct - penalty);

  if (scoreLabel) scoreLabel.textContent = total ? `${Math.round((finalScore / total) * 100)}%` : '0%';
  if (totalQuestions) totalQuestions.textContent = String(total);
  if (attempted) attempted.textContent = String(answered);
  if (correctAnswers) correctAnswers.textContent = String(correct);
  if (wrongAnswers) wrongAnswers.textContent = String(wrong);
  if (netScore) netScore.textContent = String(finalScore);
  if (negativeMarks) negativeMarks.textContent = String(penalty);
}

function initializeExamPage() {
  const examContent = document.getElementById('question-text');
  if (!examContent) return;
  startTimer();
  renderExamView();

  const saveNextBtn = document.getElementById('save-next-btn');
  if (saveNextBtn) {
    saveNextBtn.addEventListener('click', () => {
      if (!EXAM_QUESTION_BANK.length) return;
      state.currentQuestion = Math.min(state.currentQuestion + 1, EXAM_QUESTION_BANK.length - 1);
      saveStateToStorage();
      renderExamView();
    });
  }

  const prevBtn = document.getElementById('prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (!EXAM_QUESTION_BANK.length) return;
      state.currentQuestion = Math.max(state.currentQuestion - 1, 0);
      saveStateToStorage();
      renderExamView();
    });
  }

  const clearResponseBtn = document.getElementById('clear-response-btn');
  if (clearResponseBtn) {
    clearResponseBtn.addEventListener('click', () => {
      delete state.answers[state.currentQuestion];
      saveStateToStorage();
      renderExamView();
    });
  }

  const markReviewBtn = document.getElementById('mark-review-btn');
  if (markReviewBtn) {
    markReviewBtn.addEventListener('click', () => {
      if (!EXAM_QUESTION_BANK.length) return;
      if (!state.markedForReview.includes(state.currentQuestion)) {
        state.markedForReview.push(state.currentQuestion);
      }
      if (state.currentQuestion < EXAM_QUESTION_BANK.length - 1) {
        state.currentQuestion += 1;
      }
      saveStateToStorage();
      renderExamView();
    });
  }

  const submitBtn = document.getElementById('submit-test-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const modal = document.getElementById('submit-modal');
      if (modal) modal.classList.add('active');
    });
  }

  const cancelBtn = document.getElementById('cancel-submit');
  const confirmBtn = document.getElementById('confirm-submit');
  if (cancelBtn && confirmBtn) {
    cancelBtn.addEventListener('click', () => {
      document.getElementById('submit-modal').classList.remove('active');
    });
    confirmBtn.addEventListener('click', () => {
      state.submitted = true;
      saveStateToStorage();
      window.location.href = 'result.html';
    });
  }
}

function initializeResultPage() {
  const resultRoot = document.getElementById('score-percentage');
  if (!resultRoot) return;
  renderResultView();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('question-text')) {
    initializeExamPage();
  }

  if (document.getElementById('score-percentage')) {
    initializeResultPage();
  }
});
