# global API 1/3

<br>

<ul>
    <li>no need to require!</li>
    <li class="fragment">timers: you already know almost everything!
        <ul>
            <li><code>setTimeout()</code></li>
            <li><code>setInterval()</code></li>
            <li><code>setImmediate()</code></li>
        </ul>
    </li>
    <li class="fragment">console :
        <ul>
            <li><code>log()</code> (stout)</li>
            <li><code>error()</code> (stderr)</li>
            <li><code>time() + timeEnd()</code></li>
            <li><code>group() + groupEnd()</code></li>
            <li><code>table()</code></li>
        </ul>
    </li>
</ul>

https://nodejs.org/api/console.html
<!-- .element: class="credits" -->

Notes:
chalk, progress

##==##

# global API 2/3

<br>

process:
<ul>
    <li class="fragment" data-fragment-index="1"><code>process.argv</code> : for command line arguments</li>
    <li class="fragment"><code>process.chdir(directory)</code> : to change the working directory</li>
    <li class="fragment"><code>process.cwd()</code> : to get the current directory</li>
    <li class="fragment"><code>process.env</code> : object containing environment variables</li>
    <li class="fragment"><code>process.exit(code)</code> : to complete the process as soon as possible</li>
</ul>

##==##

# global API 3/3

<br>

Global variables: where are attached the APIs we just talked about, with a bonus:
<ul>
    <li class="fragment"><code>global</code> : the global object (equivalent to window in the browser)</li>
    <li class="fragment"><code>__dirname</code> : the path of the directory containing the current file</li>
    <li class="fragment"><code>__filename</code> : the name of the current file</li>
    <li class="fragment"><code>exports</code> : shortcut to module.exports</li>
    <li class="fragment"><code>require</code> : shortcut to module.require</li>
</ul>
