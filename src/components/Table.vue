<template>
    <div id="TableComponent">
        <table>
            <thead>
                <th v-for="item in headers" :key="item">{{item.name}}</th>
            </thead>
            <tbody>
                <tr v-for="item in bodys" :key="item">
                    <td>
                        {{ item.id }}
                    </td>
                    <td>
                        <a :class="{disabled : !item.link}" href="/">
                            {{ item.name }}
                        </a>
                    </td>
                    <td>{{item.link}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>
<script>
export default{
    name:'TableComponent',
    props: {
        headers : Array,
        bodys : Array
    }
}
</script>
<style>
#TableComponent{
    text-align: center;
}
table{
    border: 1px solid;
    display:inline-block;
}

.disabled{
    pointer-events: none;
    cursor: default;
    color:gray;
    text-decoration: none;
}

a{
    color: darkturquoise;
    text-decoration: none;
}
</style>